import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Shield, TestTube, Users } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { cardReveal, easeSmooth, staggerContainer, viewportOnce } from "@/lib/motion";

const achievements = [
  { icon: TrendingUp, text: "30% reduction in feature delivery timelines via microservices migration", hoverColor: "hover:border-orange-500" },
  { icon: TrendingUp, text: "25% API response efficiency boost through MySQL optimizations", hoverColor: "hover:border-blue-500" },
  { icon: Shield, text: "35% reduction in production incidents with global exception handling", hoverColor: "hover:border-emerald-500" },
  { icon: TestTube, text: "Increased test coverage from 45% to 80%+ with JUnit & Mockito", hoverColor: "hover:border-purple-500" },
  { icon: Users, text: "Mentored junior developers on clean code & SOLID principles", hoverColor: "hover:border-cyan-500" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="03. EXPERIENCE" title="Where I've Worked" />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.95, ease: easeSmooth }}
          className="p-6 rounded-xl bg-card border border-border shadow-card mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-primary" size={22} />
            <h4 className="text-xl font-bold">Java Backend Developer</h4>
            <span className="text-primary font-display text-sm font-semibold">@ mroads</span>
          </div>
          <p className="text-sm text-muted-foreground font-display">
            Dec 2021 — Present · Hyderabad, India
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {achievements.map((item) => (
            <motion.div
              key={item.text}
              variants={cardReveal}
              className={`p-5 rounded-xl bg-card border border-border shadow-card transition-all duration-500 cursor-default group ${item.hoverColor} hover:shadow-card-hover`}
            >
              <item.icon className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300" size={20} />
              <span className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
