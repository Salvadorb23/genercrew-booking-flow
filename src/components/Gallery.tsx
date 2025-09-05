import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [

   
  ];

  return (
    <section id="galeria" className="py-1 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
         
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