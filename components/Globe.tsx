"use client";
import { useEffect, useRef } from "react";
import { LAND_B64 } from "./landMask";

// [lat, lon] of major population centres -> bright glowing hubs on land
const CITIES = [[28.6,77.2],[19,72.8],[31.2,121.5],[39.9,116.4],[35.7,139.7],[23.1,113.3],[13.7,100.5],[-6.2,106.8],[55.7,37.6],[48.8,2.3],[51.5,-0.1],[52.5,13.4],[41,29],[30,31.2],[6.5,3.4],[-26.2,28],[40.7,-74],[34,-118],[41.9,-87.6],[19.4,-99.1],[-23.5,-46.6],[-34.6,-58.4],[37.5,127],[1.3,103.8],[25.2,55.3],[35.7,51.4],[24.7,46.7],[33.7,73],[23.8,90.4],[-33.9,151.2],[50,30],[45,9],[22.5,88.3],[12.9,77.6]];

export default function Globe() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, raf = 0, rot = 1.35; // start facing the Americas
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const D = Math.PI / 180;

    // ---- real land mask -> dotted continents + glowing hubs ----
    const bin = atob(LAND_B64);
    const bits = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bits[i] = bin.charCodeAt(i);
    const MW = 360, MH = 180;
    const isLand = (i: number, j: number) => {
      if (j < 0 || j >= MH) return false;
      const k = j * MW + ((i + MW) % MW);
      return ((bits[k >> 3] >> (k & 7)) & 1) === 1;
    };
    const fill: number[][] = [], coast: number[][] = [], lights: number[][] = [];
    for (let j = 0; j < MH; j++) {
      for (let i = 0; i < MW; i++) {
        if (!isLand(i, j)) continue;
        const lat = 90 - (j + 0.5), lon = i + 0.5 - 180;
        const edge = !isLand(i + 1, j) || !isLand(i - 1, j) || !isLand(i, j + 1) || !isLand(i, j - 1);
        const list = edge ? coast : fill;
        for (let n = 0; n < 4; n++) list.push([(lat + Math.random() - 0.5) * D, (lon + Math.random() - 0.5) * D, edge ? 0.6 + Math.random() * 0.4 : 0.35 + Math.random() * 0.5]);
      }
    }
    CITIES.forEach(([la, lo]) => {
      for (let n = 0; n < 40; n++) {
        const a = Math.random() * 6.283, r = Math.pow(Math.random(), 1.6) * 3;
        const lat = la + Math.sin(a) * r, lon = lo + Math.cos(a) * r * 1.3;
        if (isLand(Math.floor(lon + 180), Math.floor(90 - lat))) lights.push([lat * D, lon * D, 0.5 + Math.random() * 0.5]);
      }
    });

    // ---- network shell: scattered nodes joined to their 3 nearest neighbours ----
    const nodes = Array.from({ length: 120 }, () => {
      const lat = Math.asin(2 * Math.random() - 1), lon = Math.random() * 6.283, r = 1.03 + Math.random() * 0.24;
      return { x: Math.cos(lat) * Math.sin(lon) * r, y: Math.sin(lat) * r, z: Math.cos(lat) * Math.cos(lon) * r, hub: Math.random() < 0.13 };
    });
    const edges: number[][] = [], seen = new Set<string>();
    nodes.forEach((a, i) => {
      nodes.map((b, j) => ({ j, d: (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2 }))
        .filter((o) => o.j !== i).sort((p, q) => p.d - q.d).slice(0, 3)
        .forEach((o) => { const key = i < o.j ? i + "-" + o.j : o.j + "-" + i; if (!seen.has(key)) { seen.add(key); edges.push([i, o.j]); } });
    });

    // ---- light pulses that travel along the wires, hopping node to node ----
    const adj: number[][] = nodes.map(() => []);
    edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
    const pulses = Array.from({ length: 32 }, () => {
      const from = Math.floor(Math.random() * nodes.length);
      return { from, to: adj[from][Math.floor(Math.random() * adj[from].length)], p: Math.random(), v: 0.0004 + Math.random() * 0.0007 };
    });
    let last = 0;

    const stars = Array.from({ length: 140 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.2 + 0.3 }));

    const resize = () => {
      const r = cv.getBoundingClientRect();
      W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const tilt = 0.38, ct = Math.cos(tilt), st = Math.sin(tilt);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H * 0.9, R = Math.min(W * 0.3, H * 0.34); // centre near the bottom -> only the upper half shows
      const cr = Math.cos(rot), sr = Math.sin(rot);
      // rotate a 3D vector (spin about Y, then tilt) -> [x, y, z]
      const rotv = (vx: number, vy: number, vz: number) => {
        const x = vx * cr + vz * sr, z0 = -vx * sr + vz * cr;
        return [x, vy * ct - z0 * st, vy * st + z0 * ct];
      };
      const plot = (arr: number[][], size: number, color: string, am: number) => {
        ctx.fillStyle = color;
        for (let n = 0; n < arr.length; n++) {
          const p = arr[n], cl = Math.cos(p[0]);
          const [x, y, z] = rotv(cl * Math.sin(p[1]), Math.sin(p[0]), cl * Math.cos(p[1]));
          if (z < 0.03) continue;
          const light = 0.4 + 0.6 * Math.max(0, x * 0.4 + y * 0.35 + z * 0.6);
          ctx.globalAlpha = Math.min(1, p[2] * light * am * Math.pow(z, 0.45));
          ctx.fillRect(cx + x * R - size / 2, cy - y * R - size / 2, size, size);
        }
        ctx.globalAlpha = 1;
      };

      // atmosphere glow (brighter toward the upper right) + stars
      const g = ctx.createRadialGradient(cx + R * 0.5, cy - R * 0.4, R * 0.3, cx, cy, R * 2.2);
      g.addColorStop(0, "rgba(40,150,255,0.30)"); g.addColorStop(1, "rgba(20,90,220,0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      stars.forEach((s) => {
        ctx.fillStyle = `rgba(120,210,255,${0.2 + 0.25 * Math.sin(t / 800 + s.x * 30)})`;
        ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, 7); ctx.fill();
      });

      // translucent sphere body
      const body = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.05, cx, cy, R);
      body.addColorStop(0, "#0d3a78"); body.addColorStop(0.6, "#06183a"); body.addColorStop(1, "#030c20");
      ctx.fillStyle = body; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill();

      // latitude / longitude grid (front side only)
      ctx.lineWidth = 0.8; ctx.strokeStyle = "rgba(90,180,255,0.22)";
      const trace = (f: (u: number) => number[]) => {
        ctx.beginPath(); let pen = false;
        for (let i = 0; i <= 90; i++) {
          const [x, y, z] = rotv(...(f((i / 90) * 6.283) as [number, number, number]));
          if (z < 0) { pen = false; continue; }
          pen ? ctx.lineTo(cx + x * R, cy - y * R) : ctx.moveTo(cx + x * R, cy - y * R); pen = true;
        }
        ctx.stroke();
      };
      for (let la = -60; la <= 60; la += 20) trace((u) => [Math.cos(la * D) * Math.sin(u), Math.sin(la * D), Math.cos(la * D) * Math.cos(u)]);
      for (let lo = 0; lo < 180; lo += 20) trace((u) => [Math.cos(u) * Math.sin(lo * D), Math.sin(u), Math.cos(u) * Math.cos(lo * D)]);

      // dotted continents, glowing coast and hubs (additive)
            ctx.globalCompositeOperation = "lighter";
      plot(fill, 1.4, "#3fa6ff", 0.75);
      plot(coast, 1.7, "#7fd4ff", 0.95);
      plot(lights, 5, "#2d9cff", 0.16);
      plot(lights, 1.8, "#d8f3ff", 1);
      ctx.globalCompositeOperation = "source-over";

      // rim light
      const rim = ctx.createRadialGradient(cx, cy, R * 0.86, cx, cy, R * 1.03);
      rim.addColorStop(0, "rgba(60,170,255,0)"); rim.addColorStop(0.9, "rgba(90,190,255,0.4)"); rim.addColorStop(1, "rgba(60,170,255,0)");
      ctx.fillStyle = rim; ctx.beginPath(); ctx.arc(cx, cy, R * 1.03, 0, 7); ctx.fill();

      // network shell: lines then nodes, depth-faded
      const P = nodes.map((n) => rotv(n.x, n.y, n.z));
      ctx.lineWidth = 0.8;
      edges.forEach(([a, b]) => {
        const A = P[a], B = P[b], d = ((A[2] + B[2]) / 2 + 1.3) / 2.6;
        ctx.strokeStyle = `rgba(110,200,255,${0.1 + d * 0.5})`;
        ctx.beginPath(); ctx.moveTo(cx + A[0] * R, cy - A[1] * R); ctx.lineTo(cx + B[0] * R, cy - B[1] * R); ctx.stroke();
      });
      nodes.forEach((n, i) => {
        const [x, y, z] = P[i], d = (z + 1.3) / 2.6, X = cx + x * R, Y = cy - y * R;
        if (n.hub) {
          const pulse = 0.75 + 0.25 * Math.sin(t / 500 + i);
          ctx.fillStyle = `rgba(90,190,255,${0.25 * d * pulse})`; ctx.beginPath(); ctx.arc(X, Y, 9 * pulse, 0, 7); ctx.fill();
          ctx.fillStyle = "#9ddcff"; ctx.shadowColor = "#5cc8ff"; ctx.shadowBlur = 8 * d;
          ctx.beginPath(); ctx.arc(X, Y, 1.9, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = `rgba(150,220,255,${0.3 + d * 0.6})`; ctx.beginPath(); ctx.arc(X, Y, 1.5, 0, 7); ctx.fill();
        }
      });

      // travelling light: glowing head with a fading trail along the wire
      const dt = last ? Math.min(t - last, 50) : 16; last = t;
      pulses.forEach((u) => {
        if (!reduce) u.p += u.v * dt;
        if (u.p >= 1) {
          const opts = adj[u.to].filter((n) => n !== u.from);
          const nxt = opts.length ? opts : adj[u.to];
          u.from = u.to; u.to = nxt[Math.floor(Math.random() * nxt.length)]; u.p = 0;
        }
        const A = nodes[u.from], B = nodes[u.to];
        const at = (q: number) => { const k = Math.max(0, q); return rotv(A.x + (B.x - A.x) * k, A.y + (B.y - A.y) * k, A.z + (B.z - A.z) * k); };
        const head = at(u.p), d = 0.3 + 0.7 * ((head[2] + 1.3) / 2.6);
        let prev = at(u.p - 0.4);
        for (let i = 1; i <= 8; i++) {
          const c = at(u.p - 0.4 + (0.4 * i) / 8), f = i / 8;
          ctx.strokeStyle = `rgba(150,225,255,${f * f * 0.9 * d})`; ctx.lineWidth = 0.8 + f * 1.6;
          ctx.beginPath(); ctx.moveTo(cx + prev[0] * R, cy - prev[1] * R); ctx.lineTo(cx + c[0] * R, cy - c[1] * R); ctx.stroke();
          prev = c;
        }
        const X = cx + head[0] * R, Y = cy - head[1] * R;
        ctx.fillStyle = `rgba(90,190,255,${0.35 * d})`; ctx.beginPath(); ctx.arc(X, Y, 7, 0, 7); ctx.fill();
        ctx.fillStyle = "#fff"; ctx.shadowColor = "#5cc8ff"; ctx.shadowBlur = 14 * d;
        ctx.beginPath(); ctx.arc(X, Y, 2.2, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
      });

      if (!reduce) rot -= 0.0014;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="globe" aria-hidden />;
}
