import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { easeSmooth } from "@/lib/motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Background — slow fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.35, ease: easeSmooth }}
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/25 via-background to-secondary/40"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easeSmooth, delay: 0.15 }}
        className="absolute inset-0 bg-background/70"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile Photo — slide in from left + gentle fade */}
          <motion.div
            initial={{ opacity: 0, x: -64, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.05, ease: easeSmooth, delay: 0.08 }}
            className="shrink-0"
          >
            <div
              className="group relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/45
                shadow-[0_14px_44px_-16px_hsl(var(--primary)/0.28),0_6px_20px_-8px_hsl(210_80%_50%/0.18)]
                transition-[box-shadow,transform] duration-500 ease-out
                hover:shadow-[0_18px_52px_-14px_hsl(var(--primary)/0.38),0_8px_24px_-6px_hsl(210_80%_50%/0.24)]
                hover:scale-[1.02]"
            >
              <img
                src={profilePhoto}
                alt="Balram DD"
                width={800}
                height={800}
                className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Text Content — staggered reveal */}
          <motion.div
            className="text-center md:text-left flex-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.16, delayChildren: 0.35 },
              },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.9, ease: easeSmooth },
                },
              }}
              className="font-display text-sm text-primary mb-4 tracking-wider"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: easeSmooth },
                },
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
            >
              <span className="text-gradient">BALRAM</span>{" "}
              <span className="text-foreground">DD</span>
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5 },
                },
              }}
              className="mb-5"
            >
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.15, ease: easeSmooth, delay: 0.65 }}
                className="mb-4 h-[3px] w-full origin-center rounded-full bg-gradient-to-r from-transparent via-primary via-50% to-transparent shadow-[0_0_28px_hsl(var(--primary)/0.85),0_0_56px_hsl(var(--primary)/0.5),0_0_90px_hsl(var(--primary)/0.25)]"
                aria-hidden
              />
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.95, ease: easeSmooth, delay: 0.85 }}
                className="rounded-xl border border-primary/45 bg-gradient-to-br from-primary/[0.14] via-primary/[0.04] to-primary/[0.1] px-4 py-3.5 shadow-[0_0_40px_-6px_hsl(var(--primary)/0.55),0_0_80px_-12px_hsl(var(--primary)/0.35),inset_0_0_30px_-8px_hsl(var(--primary)/0.12),inset_0_1px_0_0_hsl(var(--primary)/0.35)] backdrop-blur-sm md:px-5"
              >
                <p className="font-display text-center text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.2em] text-primary/90 drop-shadow-[0_0_20px_hsl(var(--primary)/0.65),0_0_40px_hsl(var(--primary)/0.35)] sm:text-xs md:text-left md:text-sm md:tracking-[0.22em]">
                  <span className="text-gradient">Java Backend Developer</span>
                  <span className="mx-1.5 inline text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="text-foreground/95">Microservices</span>
                  <span className="mx-1.5 inline text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="text-gradient">Spring Boot</span>
                  <span className="mx-1.5 inline text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="text-foreground/95">AWS</span>
                </p>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.15, ease: easeSmooth, delay: 1 }}
                className="mt-4 h-[3px] w-full origin-center rounded-full bg-gradient-to-r from-transparent via-primary via-50% to-transparent shadow-[0_0_28px_hsl(var(--primary)/0.85),0_0_56px_hsl(var(--primary)/0.5),0_0_90px_hsl(var(--primary)/0.25)]"
                aria-hidden
              />
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: easeSmooth },
                },
              }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Building scalable, high-performance backend systems that power enterprise platforms.
              Passionate about clean architecture and AI-driven engineering.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.85, ease: easeSmooth },
                },
              }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <ArrowDown size={16} />
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-foreground font-medium text-sm hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Send size={16} />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
