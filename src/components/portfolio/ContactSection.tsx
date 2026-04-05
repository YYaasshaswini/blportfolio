import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { cardReveal, easeSmooth, slideInLeft, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! This form is for demo purposes.");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="06. CONTACT" title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.div
              variants={slideInLeft}
              className="p-5 rounded-xl bg-card border border-border shadow-card hover:border-primary/50 transition-all duration-500"
            >
              <p className="text-muted-foreground leading-relaxed text-sm">
                I'm always open to discussing new opportunities, collaborations, or just talking tech. Feel free to reach out!
              </p>
            </motion.div>

            <motion.a
              variants={cardReveal}
              href="mailto:writetobalramgowda@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card hover:border-orange-500 transition-all duration-500 group"
            >
              <Mail size={18} className="text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">writetobalramgowda@gmail.com</span>
            </motion.a>
            <motion.a
              variants={cardReveal}
              href="tel:+918123402340"
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card hover:border-blue-500 transition-all duration-500 group"
            >
              <Phone size={18} className="text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">+91-8123402340</span>
            </motion.a>
            <motion.div
              variants={cardReveal}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card hover:border-emerald-500 transition-all duration-500 group"
            >
              <MapPin size={18} className="text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Bangalore, Karnataka, India</span>
            </motion.div>

            <motion.div variants={cardReveal} className="flex gap-4 pt-2">
              <a href="#" className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                <Github size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInRight}
            onSubmit={handleSubmit}
            className="p-6 rounded-xl bg-card border border-border shadow-card space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease: easeSmooth, delay: 0.1 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease: easeSmooth, delay: 0.18 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease: easeSmooth, delay: 0.26 }}
            >
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all duration-300"
              />
            </motion.div>
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease: easeSmooth, delay: 0.34 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
