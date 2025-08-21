import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaveAnimationProps {
  type: 'transverse' | 'longitudinal';
  isPlaying: boolean;
  className?: string;
}

const WaveAnimation = ({ type, isPlaying, className }: WaveAnimationProps) => {
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

      ctx.clearRect(0, 0, width, height);

      if (type === 'transverse') {
        // Draw transverse wave
        ctx.strokeStyle = '#4F8BF7';
        ctx.lineWidth = 3;
        ctx.beginPath();

        for (let x = 0; x < width; x++) {
          const y = centerY + 30 * Math.sin(0.02 * x - timeRef.current);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Draw particles moving perpendicular to wave direction
        for (let x = 30; x < width; x += 60) {
          const y = centerY + 30 * Math.sin(0.02 * x - timeRef.current);
          ctx.fillStyle = '#00D9FF';
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fill();
          
          // Draw vertical arrow showing particle motion
          ctx.strokeStyle = '#00D9FF';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x, centerY - 15);
          ctx.lineTo(x, centerY + 15);
          ctx.stroke();
        }
      } else {
        // Draw longitudinal wave (compression and rarefaction)
        ctx.strokeStyle = '#4F8BF7';
        ctx.lineWidth = 2;
        
        // Draw medium particles
        for (let x = 20; x < width - 20; x += 20) {
          const compression = 5 * Math.sin(0.03 * x - timeRef.current);
          const particleX = x + compression;
          
          // Color based on compression/rarefaction
          const intensity = Math.abs(compression) / 5;
          ctx.fillStyle = intensity > 0.5 ? '#FF6B6B' : '#4ECDC4';
          
          ctx.beginPath();
          ctx.arc(particleX, centerY, 3, 0, 2 * Math.PI);
          ctx.fill();
          
          // Draw horizontal arrow showing particle motion
          if (x % 60 === 20) {
            ctx.strokeStyle = compression > 0 ? '#FF6B6B' : '#4ECDC4';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particleX - 10, centerY);
            ctx.lineTo(particleX + 10, centerY);
            ctx.stroke();
            
            // Arrow head
            ctx.beginPath();
            const arrowDir = compression > 0 ? 1 : -1;
            ctx.moveTo(particleX + 10 * arrowDir, centerY);
            ctx.lineTo(particleX + 5 * arrowDir, centerY - 3);
            ctx.moveTo(particleX + 10 * arrowDir, centerY);
            ctx.lineTo(particleX + 5 * arrowDir, centerY + 3);
            ctx.stroke();
          }
        }
      }

      timeRef.current += 0.1;
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
  }, [type, isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={120}
      className={cn("w-full h-auto bg-background/50 rounded-lg", className)}
    />
  );
};

export const WaveTypes = () => {
  const [activeType, setActiveType] = useState<'transverse' | 'longitudinal'>('transverse');
  const [isPlaying, setIsPlaying] = useState(true);

  const waveTypes = [
    {
      type: 'transverse' as const,
      title: 'Transverse Waves',
      description: 'Particles move perpendicular to wave direction',
      examples: 'Light waves, water surface waves, electromagnetic radiation',
      color: 'primary'
    },
    {
      type: 'longitudinal' as const,
      title: 'Longitudinal Waves',
      description: 'Particles move parallel to wave direction',
      examples: 'Sound waves, seismic P-waves, compression waves',
      color: 'secondary'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Type Selection */}
      <div className="flex justify-center gap-4">
        {waveTypes.map((wave) => (
          <Button
            key={wave.type}
            onClick={() => setActiveType(wave.type)}
            variant={activeType === wave.type ? "default" : "outline"}
            className={cn(
              "px-6 py-3",
              activeType === wave.type && wave.color === 'primary' && "bg-gradient-primary text-primary-foreground shadow-glow",
              activeType === wave.type && wave.color === 'secondary' && "bg-gradient-secondary text-secondary-foreground shadow-glow"
            )}
          >
            {wave.title}
          </Button>
        ))}
      </div>

      {/* Animation Display */}
      <Card className="p-8 interactive-card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">
            {waveTypes.find(w => w.type === activeType)?.title}
          </h3>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="outline"
            size="sm"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>

        <WaveAnimation type={activeType} isPlaying={isPlaying} />

        <div className="mt-6 space-y-4">
          <p className="text-lg">
            {waveTypes.find(w => w.type === activeType)?.description}
          </p>
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Examples:</h4>
            <p className="text-sm">
              {waveTypes.find(w => w.type === activeType)?.examples}
            </p>
          </div>
        </div>
      </Card>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {waveTypes.map((wave) => (
          <Card key={wave.type} className="p-6 interactive-card">
            <h4 className="font-semibold mb-3 text-lg">{wave.title}</h4>
            <div className="mb-4">
              <WaveAnimation type={wave.type} isPlaying={isPlaying} />
            </div>
            <p className="text-sm text-muted-foreground mb-2">{wave.description}</p>
            <p className="text-xs text-muted-foreground">{wave.examples}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};