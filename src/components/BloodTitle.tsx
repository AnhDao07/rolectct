import React, { useEffect, useRef } from 'react';

interface BloodTitleProps {
  text: string;
}

const BloodTitle: React.FC<BloodTitleProps> = ({ text }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Setup font for measuring
      ctx.font = "bold 64px 'DFVN-Lacquer'";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const textX = canvas.width / 2;
      const textY = canvas.height / 2;

      // Draw original text first (base for smear)
      ctx.fillStyle = '#8b0000';
      ctx.fillText(text, textX, textY);

      // Scratch/Smear effect
      const smearCount = 5;
      for (let i = 0; i < smearCount; i++) {
        const offset = (Math.sin(frame * 0.05 + i) * 20);
        const alpha = 0.3 + Math.sin(frame * 0.1 + i) * 0.2;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(offset, Math.sin(frame * 0.08 + i) * 5);
        ctx.fillText(text, textX, textY);
        ctx.restore();
      }

      requestAnimationFrame(draw);
    };

    const animation = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animation);
  }, [text]);

  return (
    <div className="relative inline-block w-full max-w-sm h-32">
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={128} 
        className="w-full h-full"
      />
    </div>
  );
};

export default BloodTitle;
