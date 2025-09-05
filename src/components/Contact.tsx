import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Contacto & Booking
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Quieres contratar a Gener Crew para tu evento? Contáctanos para más información
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Booking</h4>
                    <p className="text-muted-foreground">info@genercrew.com</p>
                    <p className="text-muted-foreground text-sm">Respuesta en 24-48 horas</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+34 603 35 10 65</p>
                    <p className="text-muted-foreground text-sm">Disponible 24/7</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">Mallorca, España</p>
                    <p className="text-muted-foreground text-sm">Disponible para eventos nacionales e internacionales</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;