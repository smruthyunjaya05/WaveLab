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
    <div className="space-y-8">
      {/* Wave Display */}
      <div className="flex justify-center">
        <WaveSimulator 
          config={config}
          isPlaying={isPlaying}
          className="max-w-4xl"
        />
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 interactive-card">
          <div className="space-y-4">
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
                Wave height
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
                Waves per second
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
                Distance between peaks
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
            <div><span className="text-accent">v</span> = Speed</div>
            <div><span className="text-wave-frequency">f</span> = Frequency</div>
            <div><span className="text-wave-speed">λ</span> = Wavelength</div>
          </div>
        </Card>

        {/* Calculations */}
        <Card className="p-6 interactive-card">
          <h3 className="text-lg font-semibold mb-4">Current Values</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Speed:</span>
              <span className="text-sm font-medium">{(config.frequency * config.wavelength).toFixed(1)} px/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Period:</span>
              <span className="text-sm font-medium">{(1 / config.frequency).toFixed(2)}s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Energy:</span>
              <span className="text-sm font-medium">∝ A²</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};