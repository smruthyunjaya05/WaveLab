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
    <div className="space-y-6">
      {/* Wave Display */}
      <div className="flex justify-center">
        <WaveSimulator 
          config={config}
          isPlaying={isPlaying}
          className="max-w-4xl"
        />
      </div>

      {/* Current Values Display */}
      <div className="flex justify-center">
        <div className="bg-card/50 backdrop-blur-sm rounded-lg px-6 py-3 border">
          <div className="flex items-center gap-6 text-base font-medium">
            <div className="text-wave-amplitude">
              Amplitude: <span className="font-bold">{config.amplitude}px</span>
            </div>
            <div className="text-wave-frequency">
              Frequency: <span className="font-bold">{config.frequency} Hz</span>
            </div>
            <div className="text-wave-speed">
              Wavelength: <span className="font-bold">{config.wavelength}px</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-6 interactive-card">
          <div className="space-y-4">
            <div>
              <label className="text-base font-semibold text-wave-amplitude mb-3 block">
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
              <p className="text-sm text-muted-foreground mt-2">
                Wave height
              </p>
            </div>

            <div>
              <label className="text-base font-semibold text-wave-frequency mb-3 block">
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
              <p className="text-sm text-muted-foreground mt-2">
                Waves per second
              </p>
            </div>

            <div>
              <label className="text-base font-semibold text-wave-speed mb-3 block">
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
              <p className="text-sm text-muted-foreground mt-2">
                Distance between peaks
              </p>
            </div>
          </div>
        </Card>

        {/* Wave Equation */}
        <Card className="p-6 bg-gradient-surface">
          <h3 className="text-xl font-bold mb-4 text-primary">Wave Equation</h3>
          <div className="font-mono text-center text-2xl mb-4">
            <span className="text-accent">v</span> = 
            <span className="text-wave-frequency mx-2">f</span> × 
            <span className="text-wave-speed mx-2">λ</span>
          </div>
          <div className="text-base text-muted-foreground space-y-1">
            <div><span className="text-accent">v</span> = Speed</div>
            <div><span className="text-wave-frequency">f</span> = Frequency</div>
            <div><span className="text-wave-speed">λ</span> = Wavelength</div>
          </div>
        </Card>

        {/* Calculations */}
        <Card className="p-6 interactive-card">
          <h3 className="text-xl font-bold mb-4">Calculations</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-base text-muted-foreground">Speed:</span>
              <span className="text-base font-semibold">{(config.frequency * config.wavelength).toFixed(1)} px/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base text-muted-foreground">Period:</span>
              <span className="text-base font-semibold">{(1 / config.frequency).toFixed(2)}s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base text-muted-foreground">Energy:</span>
              <span className="text-base font-semibold">∝ A²</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};