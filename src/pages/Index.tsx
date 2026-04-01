import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import GallerySection from "@/components/GallerySection";
import GenresSection from "@/components/GenresSection";
import FestivalSection from "@/components/FestivalSection";
import NewsSection from "@/components/NewsSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SpeakersSection />
      <GallerySection />
      <GenresSection />
      <FestivalSection />
      <NewsSection />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
