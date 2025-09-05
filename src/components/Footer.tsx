import { Instagram, Twitter, Youtube, Facebook, Music, Square } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/genercrew?igsh=MWtpNHRpdjIzM2s4Yw==", label: "Instagram" },

    { icon: Youtube, href: "https://www.youtube.com/@genercrew", label: "YouTube" },
    { icon: Music, href: "https://open.spotify.com/intl-es/artist/6oYweNH49SNb7lrFDoFIYE", label: "Spotify" },
    { icon: Facebook, href: "https://www.facebook.com/genercrewoffical", label: "Facebook" },
            { 
      icon: () => <span className="font-bold text-lg">X</span>, 
      href: "https://x.com/CrewGener", 
      label: "X" 
    }
  ];

  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#videos", label: "Videos" },
    { href: "#musica", label: "Música" },
    { href: "#bio", label: "Bio" },
    { href: "#shows", label: "Shows" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              GENER CREW
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Intérprete de música urbana desde Bucaramanga, Colombia. 
              Trap · Drill · Reggaeton con esencia underground.
            </p>
            <p className="text-sm text-muted-foreground">
              La Crew Family - Desde 2022
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>info@genercrew.com</p>
              <p>+34 603 35 10 65</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Gener Crew. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Prensa
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;