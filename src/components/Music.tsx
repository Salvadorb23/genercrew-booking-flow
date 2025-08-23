import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Music = () => {
  const releases = [
    {
      //https://open.spotify.com/intl-es/track/2Ng7D9WhSVft2NelikjDji?si=1214ed8d94a14057
      title: "Pa que lo bailen",
      year: "2022",
      description: "Colaboraciones de artistas locales e internacionales",
      spotifyId: "2Ng7D9WhSVft2NelikjDji",
      appleMusicUrl: "https://music.apple.com/co/song/pa-que-lo-bailen/1790951994",
      image: "/images/pa-que-lo-bailen-gener-crew.jpg"
    },
    {

    //https://open.spotify.com/intl-es/track/0hIt0EaatULlBQXTkckCpr?si=1c5ed5829bc34075
      title: "Brillo y Cash Gener Crew ft La R",
      year: "2025",
      description: "Single que marca la esencia underground de Gener Crew",
      spotifyId: "0hIt0EaatULlBQXTkckCpr",
      appleMusicUrl: "#",
      image: "/images/brillo-y-cash-gener-crew.jpg"
    },
    {
      //https://open.spotify.com/intl-es/track/5cC9YzzisHplgwzFZlCqkA?si=d3523ea95e8b4915
      title: "Location",
      year: "2024",
      description: "Himno oficial que representa el concepto musical del artista",
      spotifyId: "5cC9YzzisHplgwzFZlCqkA",
      appleMusicUrl: "#",
      image: "/images/location-gener-crew.jpg"
    }
  ];

  return (
    <section id="musica" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Música
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora la discografía de Gener Crew y escucha sus últimos lanzamientos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {releases.map((release, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-dark hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{release.title}</h3>
                  <p className="text-primary font-semibold">{release.year}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm">
                  {release.description}
                </p>
                
                <div className="space-y-3">
                  {/* Spotify Embed */}
                  <div className="w-full">
                    <iframe
                      src={`https://open.spotify.com/embed/track/${release.spotifyId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg"
                    />
                  </div>
                  
                  {/* Streaming Links */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Apple Music
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
<div className="text-center mt-12">
  <Button 
    size="lg" 
    className="bg-gradient-gold text-black font-bold hover:shadow-glow transition-all duration-300"
    asChild
  >
    <a 
      href="https://open.spotify.com/intl-es/artist/6oYweNH49SNb7lrFDoFIYE" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Escuchar en Spotify
    </a>
  </Button>
</div>

      </div>
    </section>
  );
};

export default Music;