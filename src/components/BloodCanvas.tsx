import React, { useEffect, useRef } from 'react';

const BloodCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const drops: { x: number; y: number; speed: number; length: number; width: number }[] = [];

    const createDrop = () => {
      if (drops.length < 50) {
        drops.push({
          x: Math.random() * canvas.width,
          y: -20,
          speed: 1 + Math.random() * 3,
          length: 10 + Math.random() * 30,
          width: 0.5 + Math.random() * 2
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dripping animation
      ctx.fillStyle = '#8b0000';
      drops.forEach((drop, index) => {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.width, 0, Math.PI * 2);
        ctx.fill();
        
        // Tail
        ctx.beginPath();
        ctx.moveTo(drop.x - drop.width, drop.y);
        ctx.lineTo(drop.x, drop.y - drop.length);
        ctx.lineTo(drop.x + drop.width, drop.y);
        ctx.fill();

        drop.y += drop.speed;

        if (drop.y > canvas.height + 50) {
          drops.splice(index, 1);
        }
      });

      if (Math.random() > 0.95) createDrop();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-40"
    />
  );
};

export default BloodCanvas;
