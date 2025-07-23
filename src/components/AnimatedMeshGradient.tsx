'use client';

import { useEffect, useRef } from 'react';

interface AnimatedMeshGradientProps {
  className?: string;
}

const AnimatedMeshGradient: React.FC<AnimatedMeshGradientProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Gradient points
    const gradientPoints = [
      { x: 0.3, y: 0.4, color: [88, 86, 214], radius: 300 }, // Purple
      { x: 0.7, y: 0.6, color: [255, 45, 85], radius: 250 }, // Red
      { x: 0.5, y: 0.8, color: [52, 199, 89], radius: 200 }, // Green
      { x: 0.2, y: 0.2, color: [0, 122, 255], radius: 180 }, // Blue
    ];

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Create gradient mesh effect
      gradientPoints.forEach((point, index) => {
        const x = point.x * canvas.offsetWidth + Math.sin(time * 0.001 + index) * 50;
        const y = point.y * canvas.offsetHeight + Math.cos(time * 0.0008 + index) * 30;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, point.radius);
        gradient.addColorStop(0, `rgba(${point.color.join(',')}, 0.4)`);
        gradient.addColorStop(0.5, `rgba(${point.color.join(',')}, 0.2)`);
        gradient.addColorStop(1, `rgba(${point.color.join(',')}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      });

      time += 16; // ~60fps
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        filter: 'blur(40px)',
        opacity: 0.7,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedMeshGradient;