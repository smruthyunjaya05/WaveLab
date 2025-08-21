import { Card } from "@/components/ui/card";
import { Music, Radio, Wifi, Stethoscope, Zap, Waves } from "lucide-react";

const applications = [
  {
    icon: Music,
    title: "Sound & Music",
    description: "Sound waves create the music we hear, from guitar strings vibrating to speakers moving air",
    color: "text-wave-frequency",
    bgColor: "bg-wave-frequency/10"
  },
  {
    icon: Radio,
    title: "Radio Waves",
    description: "Electromagnetic waves carry radio, TV, and mobile phone signals across vast distances",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Wifi,
    title: "WiFi & Internet",
    description: "Microwave frequencies enable wireless communication and high-speed data transfer",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Stethoscope,
    title: "Medical Imaging",
    description: "Ultrasound waves help doctors see inside the body without harmful radiation",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Zap,
    title: "Electricity & Power",
    description: "AC current alternates in wave patterns to efficiently transport electrical energy",
    color: "text-wave-speed",
    bgColor: "bg-wave-speed/10"
  },
  {
    icon: Waves,
    title: "Ocean & Seismology",
    description: "Water waves transport energy across oceans, while seismic waves reveal Earth's structure",
    color: "text-wave-amplitude",
    bgColor: "bg-wave-amplitude/10"
  }
];

export const ApplicationCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((app, index) => (
        <Card 
          key={index} 
          className="p-6 interactive-card group cursor-pointer"
        >
          <div className={`w-12 h-12 rounded-lg ${app.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <app.icon className={`w-6 h-6 ${app.color}`} />
          </div>
          
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {app.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {app.description}
          </p>
        </Card>
      ))}
    </div>
  );
};