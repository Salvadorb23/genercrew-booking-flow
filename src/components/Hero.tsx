import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/gener-hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gener Crew"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-gold bg-clip-text text-transparent leading-tight">
          GENER CREW
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-light">
          La Crew Family
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Trap · Drill · Dancehall · Reggaeton · Underground
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-gold text-black font-bold text-lg px-8 py-4 hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Próximamente Reservar
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-4 transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Ver Videos
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;