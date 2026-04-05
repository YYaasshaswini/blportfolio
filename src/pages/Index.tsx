import { motion } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AIImpactSection from "@/components/portfolio/AIImpactSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { easeSmooth, viewportOnce } from "@/lib/motion";

const SectionDivider = () => (
  <div className="max-w-6xl mx-auto px-4 md:px-8 py-2">
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 1.1, ease: easeSmooth }}
      className="h-px w-full origin-center bg-gradient-to-r from-transparent via-primary/35 to-transparent shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
    />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <AIImpactSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
