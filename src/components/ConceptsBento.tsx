import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Waves, 
  Volume2, 
  Lightbulb, 
  Zap, 
  Radio, 
  Smartphone,
  Music,
  Eye,
  ChevronRight
} from "lucide-react";

export const ConceptsBento = () => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  const concepts = [
    {
      id: 'sound',
      title: 'Sound Waves',
      description: 'Longitudinal mechanical waves that travel through air',
      icon: Volume2,
      color: 'primary',
      details: {
        definition: 'Sound is produced by vibrating objects and travels as longitudinal waves through a medium.',
        properties: ['Frequency: 20 Hz - 20,000 Hz (audible range)', 'Speed: ~343 m/s in air at 20°C', 'Amplitude determines loudness'],
        applications: ['Music and speech', 'Echolocation', 'Medical ultrasound', 'Sonar systems']
      }
    },
    {
      id: 'light',
      title: 'Light Waves',
      description: 'Electromagnetic waves that enable vision',
      icon: Eye,
      color: 'secondary',
      details: {
        definition: 'Light is electromagnetic radiation visible to the human eye, exhibiting both wave and particle properties.',
        properties: ['Wavelength: 380-700 nm (visible spectrum)', 'Speed: 3×10⁸ m/s in vacuum', 'Does not require medium'],
        applications: ['Vision and photography', 'Optical fibers', 'Lasers', 'Solar energy']
      }
    },
    {
      id: 'radio',
      title: 'Radio Waves',
      description: 'Long wavelength electromagnetic waves for communication',
      icon: Radio,
      color: 'accent',
      details: {
        definition: 'Radio waves are electromagnetic waves with the longest wavelengths in the electromagnetic spectrum.',
        properties: ['Wavelength: 1mm to 100km', 'Low frequency: 3 kHz - 300 GHz', 'Can travel long distances'],
        applications: ['Broadcasting', 'Mobile communication', 'Wi-Fi and Bluetooth', 'Satellite communication']
      }
    }
  ];

  const waveProperties = [
    {
      property: 'Amplitude',
      symbol: 'A',
      description: 'Maximum displacement from equilibrium',
      relation: 'Energy ∝ A²',
      unit: 'meter (m)'
    },
    {
      property: 'Frequency',
      symbol: 'f',
      description: 'Number of oscillations per second',
      relation: 'f = 1/T',
      unit: 'Hertz (Hz)'
    },
    {
      property: 'Wavelength',
      symbol: 'λ',
      description: 'Distance between consecutive crests',
      relation: 'λ = v/f',
      unit: 'meter (m)'
    },
    {
      property: 'Speed',
      symbol: 'v',
      description: 'Rate of wave propagation',
      relation: 'v = fλ',
      unit: 'm/s'
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Wave Concepts Explorer</h2>
            <p className="text-muted-foreground text-xl">
              Interactive exploration of wave phenomena
            </p>
          </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          
          {/* Hero Concept Card */}
          <Card className="interactive-card p-6 md:col-span-2 lg:col-span-3 row-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Waves className="text-primary" size={32} />
              <div>
                <h3 className="text-2xl font-bold">Wave Motion</h3>
                <Badge variant="outline">Physics</Badge>
              </div>
            </div>
            <p className="text-xl mb-4">
              Waves are disturbances that transfer energy through space or matter without transferring the matter itself.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-base">Energy transfer without matter transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-base">Follows mathematical wave equation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-base">Exhibits reflection, refraction, interference</span>
              </div>
            </div>
          </Card>

          {/* Wave Types */}
          <Card className="interactive-card p-4 lg:col-span-1">
            <h4 className="font-semibold mb-2 text-base">Transverse</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Particle motion ⊥ to wave direction
            </p>
            <div className="text-sm space-y-1">
              <div>• Light waves</div>
              <div>• Water waves</div>
              <div>• EM radiation</div>
            </div>
          </Card>

          <Card className="interactive-card p-4 lg:col-span-1">
            <h4 className="font-semibold mb-2 text-base">Longitudinal</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Particle motion ∥ to wave direction
            </p>
            <div className="text-sm space-y-1">
              <div>• Sound waves</div>
              <div>• P-waves</div>
              <div>• Compression waves</div>
            </div>
          </Card>

          <Card className="interactive-card p-4 lg:col-span-1">
            <h4 className="font-semibold mb-2 text-base">Mechanical</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Requires medium
            </p>
            <div className="text-sm space-y-1">
              <div>• Sound</div>
              <div>• Water</div>
              <div>• Seismic</div>
            </div>
          </Card>

          {/* Wave Equation */}
          <Card className="interactive-card p-6 md:col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-4 flex items-center gap-2 text-xl">
              <Zap className="text-accent" size={24} />
              The Universal Wave Equation
            </h4>
            <div className="bg-gradient-primary/10 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">v = f × λ</div>
              <div className="text-base text-muted-foreground">
                Speed = Frequency × Wavelength
              </div>
            </div>
            <p className="text-base mt-3">
              This equation applies to all types of waves and is fundamental to understanding wave behavior.
            </p>
          </Card>

        </div>

        {/* Wave Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {waveProperties.map((prop, index) => (
            <Card key={index} className="interactive-card p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg">{prop.property}</h4>
                <Badge variant="outline" className="text-sm">{prop.symbol}</Badge>
              </div>
              <p className="text-base text-muted-foreground mb-3">{prop.description}</p>
              <div className="text-sm space-y-1">
                <div className="font-semibold">{prop.relation}</div>
                <div className="text-muted-foreground">Unit: {prop.unit}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concepts.map((concept) => {
            const IconComponent = concept.icon;
            const isSelected = selectedConcept === concept.id;
            
            return (
              <Card 
                key={concept.id} 
                className={`interactive-card p-6 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
                onClick={() => setSelectedConcept(isSelected ? null : concept.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${concept.color}/10`}>
                    <IconComponent className={`text-${concept.color}`} size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{concept.title}</h4>
                    <p className="text-sm text-muted-foreground">{concept.description}</p>
                  </div>
                  <ChevronRight 
                    className={`ml-auto transition-transform ${isSelected ? 'rotate-90' : ''}`} 
                    size={16} 
                  />
                </div>

                {isSelected && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h5 className="font-medium mb-2">Definition</h5>
                      <p className="text-sm text-muted-foreground">{concept.details.definition}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-2">Key Properties</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {concept.details.properties.map((prop, idx) => (
                          <li key={idx}>• {prop}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Applications</h5>
                      <div className="flex flex-wrap gap-2">
                        {concept.details.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};