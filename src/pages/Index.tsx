import { useState } from "react";
import { WaveSimulator } from "@/components/WaveSimulator";
import { WaveProperties } from "@/components/WaveProperties";
import { ApplicationCards } from "@/components/ApplicationCards";
import { WaveTypes } from "@/components/WaveTypes";
import { WaveTheory } from "@/components/WaveTheory";
import { ConceptsBento } from "@/components/ConceptsBento";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Pause } from "lucide-react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [waveConfig, setWaveConfig] = useState({
    amplitude: 50,
    frequency: 1,
    wavelength: 200,
    speed: 100
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-wave opacity-10 wave-animation" />
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                WaveLab
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Interactive Wave Physics Learning Laboratory
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Master wave physics through hands-on experiments and visual simulations. 
              Explore how waves carry energy through space and matter, from water ripples 
              to electromagnetic radiation.
            </p>
          </div>

          {/* Interactive Wave Preview */}
          <div className="mb-8">
            <WaveSimulator 
              config={waveConfig} 
              isPlaying={isPlaying}
              className="mx-auto max-w-4xl"
            />
          </div>

          {/* Control Button */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="gradient"
              size="lg"
            >
              {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
              {isPlaying ? 'Pause' : 'Play'} Animation
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-wave-oscillate">
            <ArrowDown className="text-accent" size={32} />
          </div>
        </div>
      </section>

      {/* Wave Theory Section */}
      <WaveTheory />

      {/* Interactive Concepts Bento */}
      <ConceptsBento />

      {/* Wave Properties Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Interactive Wave Properties</h2>
            <p className="text-muted-foreground text-lg">
              Explore how amplitude, frequency, and wavelength shape wave behavior
            </p>
          </div>
          
          <WaveProperties 
            config={waveConfig}
            onChange={setWaveConfig}
            isPlaying={isPlaying}
          />
        </div>
      </section>

      {/* Wave Types Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Types of Waves</h2>
            <p className="text-muted-foreground text-lg">
              Understanding transverse and longitudinal wave motion
            </p>
          </div>
          
          <WaveTypes />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-muted-foreground text-lg">
              Discover how wave physics powers our modern world
            </p>
          </div>
          
          <ApplicationCards />
        </div>
      </section>
    </div>
  );
};

export default Index;