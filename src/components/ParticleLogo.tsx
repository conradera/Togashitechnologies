"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  originX: number;
  originY: number;
  size: number;
  opacity: number;
  speed: number;
  angle: number;
  drift: number;
}

export default function ParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const assembledRef = useRef(false);
  const timeRef = useRef(0);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Create offscreen canvas to sample the SVG
    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    const img = new Image();
    img.onload = () => {
      const logoSize = Math.min(rect.width, rect.height) * 1;
      const offsetX = (rect.width - logoSize) / 2;
      const offsetY = (rect.height - logoSize) / 2;

      offscreen.width = rect.width;
      offscreen.height = rect.height;
      offCtx.drawImage(img, offsetX, offsetY, logoSize, logoSize);

      const imageData = offCtx.getImageData(0, 0, rect.width, rect.height);
      const pixels = imageData.data;

      const particles: Particle[] = [];
      const gap = 2; // Sampling density — tighter for readable text

      for (let y = 0; y < rect.height; y += gap) {
        for (let x = 0; x < rect.width; x += gap) {
          const i = (y * rect.width + x) * 4;
          const alpha = pixels[i + 3];
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];

          // Only sample dark pixels (the logo is black)
          if (alpha > 128 && r < 100 && g < 100 && b < 100) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 400 + 200;
            particles.push({
              x: x + Math.cos(angle) * distance,
              y: y + Math.sin(angle) * distance,
              targetX: x,
              targetY: y,
              originX: x,
              originY: y,
              size: Math.random() * 1.4 + 0.5,
              opacity: 0,
              speed: Math.random() * 0.03 + 0.015,
              angle: Math.random() * Math.PI * 2,
              drift: Math.random() * 0.5 + 0.2,
            });
          }
        }
      }

      particlesRef.current = particles;
      assembledRef.current = false;
      timeRef.current = 0;
    };

    img.src = "/logo.svg";
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initParticles(canvas);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      timeRef.current += 0.01;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Assemble animation
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.x += dx * p.speed;
        p.y += dy * p.speed;

        // Fade in as particles approach target
        const dist = Math.sqrt(dx * dx + dy * dy);
        p.opacity = Math.min(1, p.opacity + 0.02);

        // Subtle breathing once assembled
        if (dist < 2) {
          if (!assembledRef.current) assembledRef.current = true;
          p.x =
            p.originX +
            Math.sin(timeRef.current * p.drift + p.angle) * 1.2;
          p.y =
            p.originY +
            Math.cos(timeRef.current * p.drift + p.angle) * 1.2;
        }

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        const repelRadius = 80;
        if (mDist < repelRadius) {
          const force = (repelRadius - mDist) / repelRadius;
          p.x += (mdx / mDist) * force * 8;
          p.y += (mdy / mDist) * force * 8;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(23, 23, 23, ${p.opacity * 0.85})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      initParticles(canvas);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full cursor-none"
      style={{ touchAction: "none" }}
    />
  );
}
