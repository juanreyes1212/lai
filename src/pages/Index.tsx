import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Zap, Users, Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/portfolio/HeroSection";
import StatsBar from "@/components/portfolio/StatsBar";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import CTASection from "@/components/portfolio/CTASection";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-noise pointer-events-none opacity-50" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-glow pointer-events-none" />
      
      <Navigation />
      
      <main>
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
