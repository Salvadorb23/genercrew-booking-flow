import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: "fn1Dz2zOxW4",
      title: "PA QUE LO BAILEN ft Gener Crew Fumaratto Oficial",
      thumbnail: "https://img.youtube.com/vi/fn1Dz2zOxW4/maxresdefault.jpg"
    },
    {
      //https://youtu.be/a92F6kmxXn8?si=YugCjKBEzS42WPjJ
      id: "a92F6kmxXn8",
      title: "BRILLO Y CASH 💸👹🦍 | Gener Crew X La R . PROD.Andres Yuma. LA CREW FAMILY",
      thumbnail: "https://img.youtube.com/vi/a92F6kmxXn8/maxresdefault.jpg"
    },
    {
      //https://youtu.be/PjVJndAXHBA?si=C9lEniD5VjWDKK4S
      id: "PjVJndAXHBA",
      title: "En El Ruedo X Gener Crew 🏍️💸🦍",
      thumbnail: "https://img.youtube.com/vi/PjVJndAXHBA/maxresdefault.jpg"
    },
    {
      //https://youtu.be/P12vp_U29vs?si=oHWkvox7PgsiSsjZ
      id: "P12vp_U29vs",
      title: "Gener Crew X FerraGramo 💸🦍 | Prod. Yanpolo 🎧👨🏻‍💻 Rfilms 🎥🎬",
      thumbnail: "https://img.youtube.com/vi/P12vp_U29vs/maxresdefault.jpg"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Videos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los últimos videoclips de Gener Crew
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {videos.map((video) => (
            <Dialog key={video.id}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-dark hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                  <div className="aspect-video relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                <div className="aspect-video w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;