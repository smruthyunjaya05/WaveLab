import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lightbulb, Target } from "lucide-react";

export const WaveTheory = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Understanding Waves</h2>
            <p className="text-muted-foreground text-lg">
              Fundamental concepts of wave physics
            </p>
          </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          
          {/* Main Definition - Large Card */}
          <Card className="interactive-card p-6 md:col-span-2 lg:col-span-2 row-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">What are Waves?</h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                A wave is a disturbance that travels through a medium or space, transferring energy 
                from one point to another without transferring matter.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Waves carry energy, not matter</li>
                  <li>• They exhibit reflection, refraction, and interference</li>
                  <li>• Can be mechanical or electromagnetic</li>
                  <li>• Follow the wave equation: v = fλ</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Wave Properties */}
          <Card className="interactive-card p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Target className="text-accent" size={20} />
              Amplitude (A)
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Maximum displacement from the equilibrium position
            </p>
            <Badge variant="outline" className="text-xs">Energy ∝ A²</Badge>
          </Card>

          <Card className="interactive-card p-4">
            <h4 className="font-semibold mb-3">Frequency (f)</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Number of complete oscillations per second
            </p>
            <Badge variant="outline" className="text-xs">Unit: Hertz (Hz)</Badge>
          </Card>

          <Card className="interactive-card p-4 md:col-span-2">
            <h4 className="font-semibold mb-3">Wavelength (λ)</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Distance between two consecutive points in the same phase
            </p>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">λ = v/f</Badge>
              <Badge variant="outline" className="text-xs">Unit: meter</Badge>
            </div>
          </Card>

          {/* Wave Equation */}
          <Card className="interactive-card p-6 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-accent" size={20} />
              <h4 className="font-semibold text-lg">The Wave Equation</h4>
            </div>
            <div className="bg-gradient-primary/10 p-4 rounded-lg">
              <div className="text-center text-2xl font-bold mb-2">v = f × λ</div>
              <div className="text-sm text-muted-foreground text-center">
                Velocity = Frequency × Wavelength
              </div>
            </div>
            <p className="text-sm mt-3">
              This fundamental equation relates the speed of a wave to its frequency and wavelength.
            </p>
          </Card>

          {/* Types Overview */}
          <Card className="interactive-card p-4 row-span-2">
            <h4 className="font-semibold mb-3">Wave Classification</h4>
            <div className="space-y-3">
              <div className="p-3 bg-primary/5 rounded">
                <h5 className="font-medium text-sm">Mechanical Waves</h5>
                <p className="text-xs text-muted-foreground">Require medium</p>
                <p className="text-xs">Sound, water waves</p>
              </div>
              <div className="p-3 bg-secondary/5 rounded">
                <h5 className="font-medium text-sm">Electromagnetic</h5>
                <p className="text-xs text-muted-foreground">No medium needed</p>
                <p className="text-xs">Light, radio waves</p>
              </div>
            </div>
          </Card>

          {/* Reflection */}
          <Card className="interactive-card p-4">
            <h4 className="font-semibold mb-2">Reflection</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Bouncing back when waves hit a boundary
            </p>
            <Badge variant="outline" className="text-xs">θᵢ = θᵣ</Badge>
          </Card>

          {/* Refraction */}
          <Card className="interactive-card p-4">
            <h4 className="font-semibold mb-2">Refraction</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Bending when entering new medium
            </p>
            <Badge variant="outline" className="text-xs">n₁sinθ₁ = n₂sinθ₂</Badge>
          </Card>

          {/* Interference */}
          <Card className="interactive-card p-4">
            <h4 className="font-semibold mb-2">Interference</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Superposition of two or more waves
            </p>
            <div className="flex gap-1">
              <Badge variant="outline" className="text-xs">Constructive</Badge>
              <Badge variant="outline" className="text-xs">Destructive</Badge>
            </div>
          </Card>

        </div>

        {/* Key Learning Objectives */}
        <Card className="interactive-card p-6 mt-8">
          <h3 className="text-xl font-bold mb-4 text-center">Key Learning Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-bold">1</span>
              </div>
              <p className="text-sm">Wave motion and energy transfer</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-bold">2</span>
              </div>
              <p className="text-sm">Transverse vs longitudinal waves</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-bold">3</span>
              </div>
              <p className="text-sm">Wave equation applications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-bold">4</span>
              </div>
              <p className="text-sm">Real-world wave phenomena</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};