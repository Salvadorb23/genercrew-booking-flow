import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Press = () => {
  const testimonials = [
    {
      quote: "Gener Crew representa la nueva generación del trap colombiano con un sonido fresco y auténtico.",
      author: "Rolling Stone Colombia",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop",
      publication: "Rolling Stone"
    },
    {
      quote: "Su versatilidad musical y flow agresivo lo posicionan como una promesa del underground latino.",
      author: "Shock Magazine",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=60&fit=crop",
      publication: "Shock"
    },
    {
      quote: "Con 'Pa que lo bailen', Gener Crew demuestra su capacidad para conectar con audiencias locales e internacionales.",
      author: "Pulzo Music",
      logo: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=120&h=60&fit=crop",
      publication: "Pulzo"
    }
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
    <section id="prensa" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Prensa & Testimonios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que dicen los medios sobre Gener Crew
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.logo}
                  alt={testimonial.publication}
                  className="w-12 h-6 object-contain mr-3 opacity-70"
                />
                <cite className="text-muted-foreground font-semibold not-italic">
                  {testimonial.author}
                </cite>
              </div>
            </Card>
          ))}
        </div>

        {/* Media Coverage */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Cobertura en Medios
          </h3>
          <p className="text-muted-foreground mb-8">
            Gener Crew ha sido destacado en importantes medios de comunicación
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto items-center">
          {mediaLogos.map((media, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105">
              <img
                src={media.logo}
                alt={media.name}
                className="max-w-full h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
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