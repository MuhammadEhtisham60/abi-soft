"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface NodeLine {
  x: number; // percentage 0..1
  topY: number; // percentage 0..1
  botY: number;
  pulseProgress: number;
  speed: number;
  burstAlpha: number;
}

export default function DigitalSpireVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Vertical line coordinates aligning with the background image spire
    const lineXOffsets = [
      { x: 0.50, topY: 0.13, botY: 0.76, speed: 0.007 },
      { x: 0.49, topY: 0.19, botY: 0.74, speed: 0.008 },
      { x: 0.51, topY: 0.17, botY: 0.75, speed: 0.0065 },
      { x: 0.475, topY: 0.26, botY: 0.73, speed: 0.0075 },
      { x: 0.525, topY: 0.24, botY: 0.73, speed: 0.0082 },
      { x: 0.455, topY: 0.33, botY: 0.71, speed: 0.006 },
      { x: 0.545, topY: 0.31, botY: 0.72, speed: 0.0078 },
      { x: 0.435, topY: 0.42, botY: 0.70, speed: 0.007 },
      { x: 0.565, topY: 0.40, botY: 0.70, speed: 0.0085 },
      { x: 0.41, topY: 0.49, botY: 0.69, speed: 0.0065 },
      { x: 0.59, topY: 0.48, botY: 0.69, speed: 0.0072 },
      { x: 0.38, topY: 0.56, botY: 0.68, speed: 0.006 },
      { x: 0.62, topY: 0.55, botY: 0.68, speed: 0.008 },
      { x: 0.34, topY: 0.62, botY: 0.70, speed: 0.0055 },
      { x: 0.66, topY: 0.61, botY: 0.70, speed: 0.0075 },
      { x: 0.28, topY: 0.67, botY: 0.72, speed: 0.006 },
      { x: 0.72, topY: 0.66, botY: 0.72, speed: 0.007 },
      { x: 0.22, topY: 0.71, botY: 0.75, speed: 0.005 },
      { x: 0.78, topY: 0.70, botY: 0.75, speed: 0.0065 },
      { x: 0.16, topY: 0.74, botY: 0.78, speed: 0.0055 },
      { x: 0.84, topY: 0.73, botY: 0.78, speed: 0.006 },
    ];

    const lines: NodeLine[] = lineXOffsets.map((o, i) => ({
      ...o,
      pulseProgress: (i * 0.15) % 1,
      burstAlpha: 0,
    }));

    // Floating data particles
    const particles = Array.from({ length: 30 }, () => ({
      x: 0.1 + Math.random() * 0.8,
      y: 0.2 + Math.random() * 0.7,
      size: 1.5 + Math.random() * 2.5,
      speedY: 0.2 + Math.random() * 0.6,
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: 0.2 + Math.random() * 0.6,
      isCube: Math.random() > 0.6,
    }));

    const resize = () => {
      const parent = cv.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      cv.width = W * dpr;
      cv.height = H * dpr;
    };

    resize();
    window.addEventListener("resize", resize);

    let scanY = 0;
    let scanDirection = 1;

    const render = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // 1. Sweeping horizontal digital scanbeam
      scanY += 0.8 * scanDirection;
      if (scanY > H) {
        scanY = H;
        scanDirection = -1;
      } else if (scanY < 0) {
        scanY = 0;
        scanDirection = 1;
      }

      const scanGrad = ctx.createLinearGradient(0, scanY - 15, 0, scanY + 15);
      scanGrad.addColorStop(0, "rgba(56, 189, 248, 0)");
      scanGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.12)");
      scanGrad.addColorStop(1, "rgba(56, 189, 248, 0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 15, W, 30);

      // 2. Rising data pulses along the spire lines
      lines.forEach((l) => {
        l.pulseProgress += l.speed;
        if (l.pulseProgress >= 1) {
          l.pulseProgress = 0;
          l.burstAlpha = 1; // Trigger node burst
        }

        const currentY = l.botY - l.pulseProgress * (l.botY - l.topY);
        const px = l.x * W;
        const py = currentY * H;
        const tailLength = 28;

        // Glowing pulse head and fading tail
        const pulseGrad = ctx.createLinearGradient(px, py + tailLength, px, py);
        pulseGrad.addColorStop(0, "rgba(56, 189, 248, 0)");
        pulseGrad.addColorStop(0.7, "rgba(56, 189, 248, 0.65)");
        pulseGrad.addColorStop(1, "rgba(255, 255, 255, 0.95)");

        ctx.strokeStyle = pulseGrad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(px, py + tailLength);
        ctx.lineTo(px, py);
        ctx.stroke();

        // Bright tip
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node burst ring when pulse reaches the top
        if (l.burstAlpha > 0.02) {
          const topX = l.x * W;
          const topNodeY = l.topY * H;
          const ringRadius = 4 + (1 - l.burstAlpha) * 16;

          ctx.strokeStyle = `rgba(56, 189, 248, ${l.burstAlpha * 0.8})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(topX, topNodeY, ringRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Core node flash
          ctx.fillStyle = `rgba(255, 255, 255, ${l.burstAlpha})`;
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 12 * l.burstAlpha;
          ctx.beginPath();
          ctx.arc(topX, topNodeY, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          l.burstAlpha *= 0.93;
        }
      });

      // 3. Floating digital cubes & particle nodes
      particles.forEach((p) => {
        p.y -= (p.speedY / H) * 1.5;
        p.x += (p.speedX / W) * 1.2;
        if (p.y < 0.1) {
          p.y = 0.85;
          p.x = 0.1 + Math.random() * 0.8;
        }

        const cx = p.x * W;
        const cy = p.y * H;

        if (p.isCube) {
          ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha * 0.75})`;
          ctx.fillRect(cx - p.size, cy - p.size, p.size * 2, p.size * 2);
        } else {
          ctx.fillStyle = `rgba(125, 211, 252, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(cx, cy, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    // Interactive mouse tilt on container
    const container = containerRef.current;
    if (container) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(container, {
          rotateY: x * 6,
          rotateX: -y * 6,
          transformPerspective: 1000,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(container, {
          rotateY: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="digital-spire-container" ref={containerRef}>
      {/* Background Graphic */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/digital-spire.png"
        alt="Digital Infrastructure Spire"
        className="digital-spire-img"
      />

      {/* Animated Pulses and Particles Canvas Overlay */}
      <canvas ref={canvasRef} className="digital-spire-canvas" />

      {/* Cyber Grid Overlay Mask */}
      <div className="digital-spire-overlay" />

      {/* Top Floating Telemetry Pill */}
      <div className="digital-spire-badge top">
        <span className="live-dot" />
        <span>USA Core Infrastructure • Active</span>
      </div>

      {/* Bottom Telemetry Card */}
      <div className="digital-spire-telemetry">
        <div className="telemetry-item">
          <small>Network Latency</small>
          <strong>12ms</strong>
        </div>
        <div className="telemetry-divider" />
        <div className="telemetry-item">
          <small>Global Nodes</small>
          <strong>240+ Connected</strong>
        </div>
        <div className="telemetry-divider" />
        <div className="telemetry-item">
          <small>Uptime</small>
          <strong>99.99%</strong>
        </div>
      </div>
    </div>
  );
}
