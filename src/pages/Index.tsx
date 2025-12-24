import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import StatsBar from "@/components/portfolio/StatsBar";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import CTASection from "@/components/portfolio/CTASection";
import Footer from "@/components/portfolio/Footer";
import SkipToContent from "@/components/SkipToContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SkipToContent />
      {/* Background effects */}
      <div className="fixed inset-0 bg-noise pointer-events-none opacity-50" aria-hidden="true" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-glow pointer-events-none" aria-hidden="true" />
      
      <Navigation />
      
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
