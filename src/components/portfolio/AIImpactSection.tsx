import { motion } from "framer-motion";
import { Zap, Bug, ShieldCheck, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { cardReveal, staggerContainer, viewportOnce } from "@/lib/motion";

const impacts = [
  {
    icon: Zap,
    title: "25–30% Faster Development",
    desc: "Integrated Cursor and Claude to automate boilerplate generation and complex refactoring, boosting sprint velocity.",
    hoverColor: "hover:border-orange-500 hover:shadow-[0_0_20px_hsl(25_95%_53%/0.15)]",
  },
  {
    icon: Bug,
    title: "Performance Tuning",
    desc: "Used AI-assisted profiling to identify memory leaks and CPU-intensive hotspots in Spring Boot apps, reducing latency.",
    hoverColor: "hover:border-blue-500 hover:shadow-[0_0_20px_hsl(210_80%_50%/0.15)]",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Leveraged Gemini and ChatGPT for automated unit test generation and edge-case identification, cutting post-release defects.",
    hoverColor: "hover:border-emerald-500 hover:shadow-[0_0_20px_hsl(160_84%_39%/0.15)]",
  },
  {
    icon: Lightbulb,
    title: "Design Reasoning",
    desc: "Applied AI tools for architectural pre-mortems — comparing design patterns and validating scaling strategies before implementation.",
    hoverColor: "hover:border-purple-500 hover:shadow-[0_0_20px_hsl(270_80%_50%/0.15)]",
  },
];

const AIImpactSection = () => {
  return (
    <section id="ai-impact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="05. AI ENGINEERING"
          title="AI-Driven Impact"
          description="Leveraging AI tools as a force multiplier — not a replacement — to ship better software faster."
        />

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {impacts.map((item) => (
            <motion.div
              key={item.title}
              variants={cardReveal}
              className={`p-6 rounded-xl bg-card shadow-card border border-border transition-all duration-500 cursor-default group ${item.hoverColor}`}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={20} />
              </div>
              <h4 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIImpactSection;
