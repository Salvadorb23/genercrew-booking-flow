import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Press = () => {
  const testimonials = [

  ];

  const mediaLogos = [
    { name: "Ac Radio Show", logo: "/logos/ac.png"},
    { name: "Caracol Radio", logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150&h=80&fit=crop" },
    { name: "RCN Radio", logo: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=150&h=80&fit=crop" },
    { name: "La Mega", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150&h=80&fit=crop" },
    { name: "Tropicana", logo: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=150&h=80&fit=crop" },
    { name: "Beat 102.9", logo: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=150&h=80&fit=crop" }
  ];

  return (
    <section id="prensa" className="py-0 bg-secondary">
      <div className="container mx-auto px-4">


        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-0">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                {/* --- ETIQUETA <img> ELIMINADA --- */}
                <cite className="text-muted-foreground font-semibold not-italic">
                  {testimonial.author}
                </cite>
              </div>
            </Card>
          ))}
        </div>

        {/* Media Coverage */}




        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500K+</div>
            <div className="text-muted-foreground">Reproducciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Medios Cubrieron</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Shows Realizados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;