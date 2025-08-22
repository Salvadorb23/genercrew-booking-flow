import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    city: "",
    date: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      city: "",
      date: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Booking</h4>
                        <p className="text-muted-foreground">booking@genercrew.com</p>
                        <p className="text-muted-foreground">management@genercrew.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                        <p className="text-muted-foreground">+57 310 123 4567</p>
                        <p className="text-muted-foreground text-sm">Disponible 24/7</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                        <p className="text-muted-foreground">Bucaramanga, Colombia</p>
                        <p className="text-muted-foreground text-sm">Disponible para eventos nacionales e internacionales</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Mailing List */}
              <Card className="p-6 bg-secondary border-border">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Únete a La Crew Family
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Sé el primero en recibir noticias, lanzamientos exclusivos y acceso anticipado a boletos
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Tu email"
                    className="flex-1"
                  />
                  <Button className="bg-gradient-gold text-black font-semibold hover:shadow-glow transition-all duration-300">
                    Suscribirse
                  </Button>
                </div>
              </Card>
            </div>

            {/* Booking Form */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Solicitud de Booking
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventType">Tipo de Evento *</Label>
                    <Select onValueChange={(value) => handleChange("eventType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="festival">Festival</SelectItem>
                        <SelectItem value="concierto">Concierto</SelectItem>
                        <SelectItem value="club">Club/Discoteca</SelectItem>
                        <SelectItem value="privado">Evento Privado</SelectItem>
                        <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Ciudad *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Fecha Tentativa</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Presupuesto</Label>
                  <Select onValueChange={(value) => handleChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Rango de presupuesto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10k">$5,000 - $10,000 USD</SelectItem>
                      <SelectItem value="10-20k">$10,000 - $20,000 USD</SelectItem>
                      <SelectItem value="20-50k">$20,000 - $50,000 USD</SelectItem>
                      <SelectItem value="50k+">$50,000+ USD</SelectItem>
                      <SelectItem value="consultar">Consultar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos más detalles sobre tu evento..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-gold text-black font-bold hover:shadow-glow transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitud
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;