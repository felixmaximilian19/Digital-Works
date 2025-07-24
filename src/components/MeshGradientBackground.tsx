"use client";

import { useEffect, useRef } from "react";

export default function MeshGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      time += 0.002;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create subtle mesh gradients
      const gradients = [
        {
          x: Math.sin(time) * 200 + canvas.width * 0.2,
          y: Math.cos(time * 0.7) * 150 + canvas.height * 0.3,
          color: "rgba(59, 130, 246, 0.03)", // Blue
          size: 300 + Math.sin(time * 0.5) * 50,
        },
        {
          x: Math.cos(time * 0.8) * 180 + canvas.width * 0.7,
          y: Math.sin(time * 0.6) * 160 + canvas.height * 0.2,
          color: "rgba(139, 92, 246, 0.02)", // Purple
          size: 250 + Math.cos(time * 0.3) * 40,
        },
        {
          x: Math.sin(time * 0.5) * 220 + canvas.width * 0.1,
          y: Math.cos(time) * 170 + canvas.height * 0.8,
          color: "rgba(236, 72, 153, 0.025)", // Pink
          size: 320 + Math.sin(time * 0.7) * 60,
        },
        {
          x: Math.cos(time * 0.4) * 160 + canvas.width * 0.8,
          y: Math.sin(time * 0.9) * 140 + canvas.height * 0.6,
          color: "rgba(16, 185, 129, 0.02)", // Emerald
          size: 280 + Math.cos(time * 0.4) * 45,
        },
      ];

      gradients.forEach((gradient) => {
        const radialGradient = ctx.createRadialGradient(
          gradient.x,
          gradient.y,
          0,
          gradient.x,
          gradient.y,
          gradient.size
        );
        
        radialGradient.addColorStop(0, gradient.color);
        radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "#000000" }}
    />
  );
}