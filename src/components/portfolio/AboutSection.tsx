import { motion } from "framer-motion";
import { Code2, Database, Cloud, Bot, GraduationCap, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { cardReveal, easeSmooth, staggerContainer, viewportOnce } from "@/lib/motion";

const aboutCards = [
  {
    icon: Briefcase,
    title: "Experience",
    text: "Java Backend Developer with over 4+ years of experience specializing in the design and development of scalable systems.",
    hoverColor: "hover:border-orange-500 hover:shadow-[0_0_20px_hsl(25_95%_53%/0.15)]",
  },
  {
    icon: Code2,
    title: "Core Expertise",
    text: "Deep knowledge in Java 8+, Spring Boot microservices, and event-driven architectures.",
    hoverColor: "hover:border-blue-500 hover:shadow-[0_0_20px_hsl(210_80%_50%/0.15)]",
  },
  {
    icon: Database,
    title: "Optimization",
    text: "Proven track record in optimizing database performance and leveraging cutting-edge AI tools to significantly reduce development lifecycles.",
    hoverColor: "hover:border-emerald-500 hover:shadow-[0_0_20px_hsl(160_84%_39%/0.15)]",
  },
  {
    icon: Cloud,
    title: "Current Role",
    text: "Currently building enterprise platforms at mroads, working with high daily active user counts and mission-critical systems.",
    hoverColor: "hover:border-purple-500 hover:shadow-[0_0_20px_hsl(270_80%_50%/0.15)]",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "BCA — Visvesvaraya Technological University / Vivekananda Institute, Bengaluru. CGPA: 9.13 (2021).",
    hoverColor: "hover:border-cyan-500 hover:shadow-[0_0_20px_hsl(190_80%_50%/0.15)]",
  },
];

const highlights = [
  { icon: Code2, label: "4+ Years", desc: "Java & Spring Boot" },
  { icon: Database, label: "DB Expert", desc: "MySQL, Redis" },
  { icon: Cloud, label: "AWS", desc: "Cloud & CI/CD" },
  { icon: Bot, label: "AI Tools", desc: "Cursor, Claude" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="01. ABOUT" title="Who I Am" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {aboutCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardReveal}
              className={`p-6 rounded-xl bg-card border border-border shadow-card transition-all duration-500 cursor-default group ${card.hoverColor}`}
            >
              <card.icon className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              <h4 className="font-display text-sm font-semibold text-primary mb-3">{card.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: easeSmooth }}
          className="mb-12 h-px w-full origin-center bg-gradient-to-r from-transparent via-border to-transparent"
          aria-hidden
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              variants={cardReveal}
              className="p-5 rounded-xl bg-card shadow-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-500 group cursor-default"
            >
              <item.icon className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              <p className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
