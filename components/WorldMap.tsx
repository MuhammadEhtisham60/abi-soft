"use client";
import { useEffect, useRef } from "react";
import { LAND_B64 } from "./landMask";

// [lat, lon]; the first hub is the USA base every route starts from
const HUBS = [[38.3,-85.8],[51.5,-0.1],[25.2,55.3],[1.3,103.8],[35.7,139.7],[-33.9,151.2],[-23.5,-46.6],[6.5,3.4],[-26.2,28],[34,-118],[48.8,2.3],[19,72.8]];

export default function WorldMap() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bin = atob(LAND_B64);
    const bits = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bits[i] = bin.charCodeAt(i);
    const TOP = 78, BOT = -58;
    let W = 0, H = 0, raf = 0, dots: HTMLCanvasElement | null = null;
    const pos = (lat: number, lon: number) => [((lon + 180) / 360) * W, ((TOP - lat) / (TOP - BOT)) * H];

    // dotted world map, drawn once to an offscreen canvas
    const build = () => {
      const r = cv.getBoundingClientRect(); W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr;
      const off = document.createElement("canvas"); off.width = W * dpr; off.height = H * dpr;
      const o = off.getContext("2d")!; o.scale(dpr, dpr); o.fillStyle = "#3fa6ff";
      const cell = W / 360;
      for (let j = 12; j < 148; j++) for (let i = 0; i < 360; i++) {
        const k = j * 360 + i;
        if ((bits[k >> 3] >> (k & 7)) & 1) { o.globalAlpha = 0.3 + Math.random() * 0.55; o.fillRect(i * cell, (j - 12) * (H / 136), cell * 0.8, cell * 0.8); }
      }
      dots = off;
    };
    build();
    window.addEventListener("resize", build);

    const draw = (ts: number) => {
      const t = reduce ? 1500 : ts;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      if (dots) ctx.drawImage(dots, 0, 0, W, H);
      const [hx, hy] = pos(HUBS[0][0], HUBS[0][1]);
      for (let n = 1; n < HUBS.length; n++) {
        const [bx, by] = pos(HUBS[n][0], HUBS[n][1]);
        const qx = (hx + bx) / 2, qy = Math.min(hy, by) - Math.abs(bx - hx) * 0.25 - 10;
        const at = (u: number) => [(1 - u) * (1 - u) * hx + 2 * (1 - u) * u * qx + u * u * bx, (1 - u) * (1 - u) * hy + 2 * (1 - u) * u * qy + u * u * by];
        ctx.strokeStyle = "rgba(90,190,255,0.28)"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(hx, hy); ctx.quadraticCurveTo(qx, qy, bx, by); ctx.stroke();
        // travelling light with a fading trail
        const u = (t / 2600 + n * 0.37) % 1;
        for (let s = 0; s < 8; s++) {
          const [x, y] = at(Math.max(0, u - 0.16 + s * 0.02));
          ctx.fillStyle = `rgba(160,225,255,${((s + 1) / 8) * 0.9})`;
          ctx.beginPath(); ctx.arc(x, y, 0.8 + s * 0.25, 0, 7); ctx.fill();
        }
        const [px, py] = at(u);
        ctx.fillStyle = "#fff"; ctx.shadowColor = "#5cc8ff"; ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.arc(px, py, 2.4, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
        // destination node
        const pulse = 0.5 + 0.5 * Math.sin(t / 500 + n);
        ctx.fillStyle = `rgba(90,190,255,${0.15 + 0.2 * pulse})`; ctx.beginPath(); ctx.arc(bx, by, 6 + pulse * 3, 0, 7); ctx.fill();
        ctx.fillStyle = "#bfe8ff"; ctx.beginPath(); ctx.arc(bx, by, 2.2, 0, 7); ctx.fill();
      }
      // USA base
      const p = 0.5 + 0.5 * Math.sin(t / 400);
      ctx.fillStyle = `rgba(45,156,255,${0.2 + 0.2 * p})`; ctx.beginPath(); ctx.arc(hx, hy, 12 + p * 6, 0, 7); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.shadowColor = "#2d9cff"; ctx.shadowBlur = 16;
      ctx.beginPath(); ctx.arc(hx, hy, 3.6, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", build); };
  }, []);

  return <canvas ref={ref} className="map" aria-label="Map of clients served worldwide" />;
}
