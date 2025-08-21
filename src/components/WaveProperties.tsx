import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { WaveSimulator } from "./WaveSimulator";

interface WaveConfig {
  amplitude: number;
  frequency: number;
  wavelength: number;
  speed: number;
}

interface WavePropertiesProps {
  config: WaveConfig;
  onChange: (config: WaveConfig) => void;
  isPlaying: boolean;
}

export const WaveProperties = ({ config, onChange, isPlaying }: WavePropertiesProps) => {
  const handleChange = (property: keyof WaveConfig, value: number) => {
    onChange({
      ...config,
      [property]: value
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Controls */}
      <div className="space-y-6">
        <Card className="p-6 interactive-card">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-wave-amplitude mb-2 block">
                Amplitude: {config.amplitude}px
              </label>
              <Slider
                value={[config.amplitude]}
                onValueChange={(value) => handleChange('amplitude', value[0])}
                max={80}
                min={10}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Controls the height of the wave - how much energy it carries
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-wave-frequency mb-2 block">
                Frequency: {config.frequency} Hz
              </label>
              <Slider
                value={[config.frequency]}
                onValueChange={(value) => handleChange('frequency', value[0])}
                max={3}
                min={0.5}
                step={0.1}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Number of complete waves per second - affects pitch in sound
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-wave-speed mb-2 block">
                Wavelength: {config.wavelength}px
              </label>
              <Slider
                value={[config.wavelength]}
                onValueChange={(value) => handleChange('wavelength', value[0])}
                max={400}
                min={50}
                step={10}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Distance between identical points on consecutive waves
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-accent mb-2 block">
                Speed: {config.speed}
              </label>
              <Slider
                value={[config.speed]}
                onValueChange={(value) => handleChange('speed', value[0])}
                max={200}
                min={50}
                step={10}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                How fast the wave travels through the medium
              </p>
            </div>
          </div>
        </Card>

        {/* Wave Equation */}
        <Card className="p-6 bg-gradient-surface">
          <h3 className="text-lg font-semibold mb-4 text-primary">Wave Equation</h3>
          <div className="font-mono text-center text-lg mb-4">
            <span className="text-accent">v</span> = 
            <span className="text-wave-frequency mx-2">f</span> × 
            <span className="text-wave-speed mx-2">λ</span>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            <div><span className="text-accent">v</span> = Wave Speed</div>
            <div><span className="text-wave-frequency">f</span> = Frequency</div>
            <div><span className="text-wave-speed">λ</span> = Wavelength</div>
          </div>
        </Card>
      </div>

      {/* Live Preview */}
      <div className="space-y-4">
        <WaveSimulator 
          config={config}
          isPlaying={isPlaying}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {(config.frequency * config.wavelength).toFixed(1)}
            </div>
            <div className="text-sm text-muted-foreground">Wave Speed</div>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">
              {(1 / config.frequency).toFixed(2)}s
            </div>
            <div className="text-sm text-muted-foreground">Period</div>
          </Card>
        </div>
      </div>
    </div>
  );
};