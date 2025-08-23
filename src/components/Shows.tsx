import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

const Shows = () => {
  const upcomingShows = [
    {
      date: "2025-09-25",
      title: "Festival Urban Beats",
      venue: "Teatro Mayor",
      city: "Bogotá, Colombia",
      time: "21:00",
      ticketUrl: "#",
      status: "available"
    },

  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section id="shows" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Shows & Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No te pierdas las próximas presentaciones de Gener Crew
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingShows.map((show, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    {/* Date */}
                    <div className="flex items-center text-primary font-bold text-lg">
                      <Calendar className="w-5 h-5 mr-2" />
                      {formatDate(show.date)}
                    </div>
                    
                    {/* Time */}
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {show.time}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {show.title}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground mb-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{show.venue}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {show.city}
                  </p>
                </div>

                {/* Ticket Button */}
                <div className="flex-shrink-0">
                  {show.status === 'available' ? (
                    <Button 
                      className="bg-gradient-gold text-black font-bold hover:shadow-glow transition-all duration-300"
                      size="lg"
                    >
                      <Ticket className="w-4 h-4 mr-2" />
                      Comprar Boletos
                    </Button>
                  ) : (
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      disabled
                      className="opacity-60"
                    >
                      AGOTADO
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bandsintown Widget Placeholder */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Mantente Actualizado</h3>
            <p className="text-muted-foreground mb-6">
              Sigue a Gener Crew y no te pierdas todo sobre nuevos shows y eventos
            </p>
            <Button variant="outline" size="lg">
              Seguir en Instagram
              
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shows;