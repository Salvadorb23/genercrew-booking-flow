import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
      alt: "Gener Crew - Studio Session",
      category: "studio"
    },
    {
      src: "https://images.unsplash.com/photo-1571974599782-87624638275d?w=600&h=800&fit=crop",
      alt: "Gener Crew - Live Performance",
      category: "live"
    },
    {
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=800&fit=crop",
      alt: "Gener Crew - Behind the Scenes",
      category: "behind"
    },
    {
      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=800&fit=crop",
      alt: "Gener Crew - Concert",
      category: "live"
    },
    {
      src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop",
      alt: "Gener Crew - Studio Portrait",
      category: "studio"
    },
    {
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop",
      alt: "Gener Crew - Live Show",
      category: "live"
    },
    {
      src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=800&fit=crop",
      alt: "Gener Crew - Backstage",
      category: "behind"
    },
    {
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=800&fit=crop",
      alt: "Gener Crew - Performance",
      category: "live"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Galería
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fotos profesionales de estudio, conciertos en vivo y momentos detrás de cámaras
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/95">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;