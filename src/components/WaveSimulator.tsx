import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WaveConfig {
  amplitude: number;
  frequency: number;
  wavelength: number;
  speed: number;
}

interface WaveSimulatorProps {
  config: WaveConfig;
  isPlaying: boolean;
  className?: string;
}

export const WaveSimulator = ({ config, isPlaying, className }: WaveSimulatorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const animate = () => {
      if (!isPlaying) return;

      // Clear canvas
      ctx.fillStyle = 'rgba(37, 38, 43, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Draw wave
      ctx.beginPath();
      ctx.strokeStyle = '#4F8BF7';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#4F8BF7';
      ctx.shadowBlur = 10;

      for (let x = 0; x < width; x++) {
        const angle = (2 * Math.PI * config.frequency * (x - timeRef.current * config.speed)) / config.wavelength;
        const y = centerY + config.amplitude * Math.sin(angle);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Draw particles to show wave motion
      const particleSpacing = 60;
      ctx.shadowBlur = 0;
      for (let x = 0; x < width; x += particleSpacing) {
        const angle = (2 * Math.PI * config.frequency * (x - timeRef.current * config.speed)) / config.wavelength;
        const y = centerY + config.amplitude * Math.sin(angle);
        
        ctx.beginPath();
        ctx.fillStyle = '#00D9FF';
        ctx.shadowColor = '#00D9FF';
        ctx.shadowBlur = 8;
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      }

      timeRef.current += 0.02;
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isPlaying) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [config, isPlaying]);

  return (
    <div className={cn("relative bg-card rounded-xl p-6 shadow-card", className)}>
      <canvas
        ref={canvasRef}
        width={800}
        height={200}
        className="w-full h-auto rounded-lg bg-gradient-to-r from-background/50 to-muted/30"
      />
      
      {/* Wave Labels */}
      <div className="absolute top-2 left-4 text-sm text-muted-foreground">
        <div>Amplitude: {config.amplitude}px</div>
        <div>Frequency: {config.frequency} Hz</div>
        <div>Wavelength: {config.wavelength}px</div>
      </div>
    </div>
  );
};