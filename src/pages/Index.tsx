import PageLayout from "@/components/portfolio/PageLayout";
import HeroSection from "@/components/portfolio/HeroSection";
import StatsBar from "@/components/portfolio/StatsBar";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import CTASection from "@/components/portfolio/CTASection";

const Index = () => {
  return (
    <PageLayout showSkipToContent>
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <CTASection />
      </main>
    </PageLayout>
  );
};

export default Index;
