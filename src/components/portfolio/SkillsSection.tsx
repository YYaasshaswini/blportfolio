import { motion } from "framer-motion";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { cardReveal, staggerContainer, viewportOnce } from "@/lib/motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java (Streams, Concurrency, Collections)", "SQL"],
    hoverColor: "hover:border-orange-500 hover:shadow-[0_0_20px_hsl(25_95%_53%/0.15)]",
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Spring Data JPA", "Hibernate", "RESTful APIs", "Microservices"],
    hoverColor: "hover:border-blue-500 hover:shadow-[0_0_20px_hsl(210_80%_50%/0.15)]",
  },
  {
    title: "Databases & Caching",
    skills: ["MySQL (Indexing & Query Optimization)", "Redis"],
    hoverColor: "hover:border-emerald-500 hover:shadow-[0_0_20px_hsl(160_84%_39%/0.15)]",
  },
  {
    title: "DevOps & QA",
    skills: ["AWS (S3)", "Git", "GitHub Actions", "Maven", "JUnit 5", "Mockito"],
    hoverColor: "hover:border-purple-500 hover:shadow-[0_0_20px_hsl(270_80%_50%/0.15)]",
  },
  {
    title: "AI Tools",
    skills: ["Cursor IDE", "Claude", "Gemini", "ChatGPT", "CoderRabbit"],
    hoverColor: "hover:border-cyan-500 hover:shadow-[0_0_20px_hsl(190_80%_50%/0.15)]",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="02. SKILLS" title="Tech Stack" />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardReveal}
              className={`p-6 rounded-xl bg-card shadow-card border border-border transition-all duration-500 cursor-default group ${cat.hoverColor}`}
            >
              <h4 className="font-display text-sm font-semibold text-primary mb-4 group-hover:scale-105 transition-transform duration-300 inline-block">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border group-hover:text-foreground group-hover:border-primary/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
