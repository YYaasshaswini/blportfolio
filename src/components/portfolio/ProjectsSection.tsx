import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { cardReveal, staggerContainer, viewportOnce } from "@/lib/motion";

const projects = [
  {
    title: "Freight Console",
    period: "Aug 2025 – Present",
    description: "Complex backend module for logistics pricing and invoice validation.",
    tech: ["Spring Boot", "MySQL", "Email Parsing", "REST APIs"],
    achievements: [
      "Automated invoice processing through intelligent email parsing",
      "98% accuracy for 1,000+ monthly transactions",
    ],
  },
  {
    title: "Virtual Recruiter",
    period: "Sep 2024 – Jul 2025",
    description: "Real-time interaction APIs for recruiter-candidate engagement.",
    tech: ["Spring Boot", "Twilio", "REST APIs", "MySQL"],
    achievements: [
      "Built real-time interaction APIs with Twilio integration",
      "Improved engagement rates by 60% through automated notifications",
    ],
  },
  {
    title: "Digital Onboarding Platform",
    period: "Jan 2024 – Aug 2024",
    description: "Scalable APIs for U.S.-based enterprise client onboarding.",
    tech: ["Spring Boot", "Microservices", "MySQL", "Redis"],
    achievements: [
      "Handled high-concurrency data entry and validation",
      "99.9% data consistency across distributed database nodes",
    ],
  },
  {
    title: "Timesheets & Payroll System",
    period: "Aug 2023 – Dec 2023",
    description: "Core modules for attendance, leave management, and payroll calculation.",
    tech: ["Spring Boot", "MySQL", "JUnit", "REST APIs"],
    achievements: [
      "Developed attendance, leave, and payroll modules",
      "Improved HR workflow speeds by 25% through SQL optimization",
    ],
  },
  {
    title: "DPT-Port Management System",
    period: "Jan 2022 – Aug 2023",
    description: "Backend services for vehicle logistics and resource allocation across port zones.",
    tech: ["Java", "Spring Boot", "MySQL", "Telemetry"],
    achievements: [
      "Managed high-frequency status updates",
      "Real-time telemetry data processing for port operations",
    ],
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={cardReveal}
      className="rounded-xl bg-card shadow-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-500 overflow-hidden group cursor-default"
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Calendar size={12} />
            <span className="font-display">{project.period}</span>
          </div>
          <h4 className="text-lg font-bold mb-1">{project.title}</h4>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <ChevronDown
          size={20}
          className={`text-muted-foreground shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-4">
              <div>
                <p className="text-xs font-display text-primary mb-2 font-semibold">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-accent text-accent-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-display text-primary mb-2 font-semibold">Key Achievements</p>
                <ul className="space-y-1.5">
                  {project.achievements.map((a, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="04. PROJECTS" title="What I've Built" />

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
