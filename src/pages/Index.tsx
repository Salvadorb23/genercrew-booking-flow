import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Videos from "@/components/Videos";
import Music from "@/components/Music";
import Bio from "@/components/Bio";
import Shows from "@/components/Shows";
import Press from "@/components/Press";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Videos />
      <Music />
      <Bio />
      <Shows />
      <Press />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
