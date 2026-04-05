import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cardReveal, easeSmooth, staggerContainer } from "@/lib/motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI Impact", href: "#ai-impact" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, ease: easeSmooth }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-primary/30"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: easeSmooth, delay: 0.12 }}
          className="font-display text-lg font-bold text-gradient"
        >
          {"<BD />"}
        </motion.a>

        <motion.ul
          className="hidden md:flex items-center gap-2"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {navLinks.map((link) => (
            <motion.li key={link.href} variants={cardReveal}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm text-muted-foreground font-medium border border-transparent hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeSmooth }}
            className="md:hidden bg-background border-b border-primary/30 overflow-hidden"
          >
            <motion.ul
              className="flex flex-col px-4 py-4 gap-2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={cardReveal}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground font-medium border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
