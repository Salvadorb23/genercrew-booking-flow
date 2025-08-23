import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Music, Award, Mic } from "lucide-react";

const Bio = () => {
  return (
    <section id="bio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Biografía / EPK
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce la historia y trayectoria de Gener Crew
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Artist Photo */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-dark">
                <img
                  src="/images/flow-gener-crew.jpg"
                  alt="Gener Crew"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  <span>Bucaramanga, Colombia</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  <span>15 de Enero, 1997</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Music className="w-5 h-5 mr-2 text-primary" />
                  <span>Trap · Drill · Dancehall · Reggaeton</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Biografía</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gener Crew es un intérprete de música urbana nacido en Bucaramanga, Colombia. 
                  Desde temprana edad desarrolló su pasión por la música, aprendiendo guitarra y 
                  componiendo canciones. Ha participado en programas de televisión como "Los Angelitos" 
                  y "Factor XS", además de múltiples shows y torneos nacionales.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En 2022, Gener Crew lanzó su concepto musical bajo el lema "La Crew Family", 
                  destacándose por su versatilidad en géneros como Trap, Drill, Dancehall y Reggaeton, 
                  manteniendo su esencia underground.
                </p>
              </div>

              
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card border-border hover:shadow-glow transition-all duration-300">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Artista Invitado</h4>
              <p className="text-muted-foreground text-sm">
                Concierto de Ryan Castro en Mallorca
              </p>
            </Card>

            <Card className="p-6 text-center bg-card border-border hover:shadow-glow transition-all duration-300">
              <Music className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Colaboración con B.I.R.A</h4>
              <p className="text-muted-foreground text-sm">
                "Flow con Flow" colaboración internacionales
              </p>
            </Card>
      
            <Card className="p-6 text-center bg-card border-border hover:shadow-glow transition-all duration-300">
              <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Radio Nacional</h4>
              <p className="text-muted-foreground text-sm">
                Reproducido en radios locales y nacionales
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;