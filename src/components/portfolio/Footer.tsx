import { motion } from "framer-motion";
import { easeSmooth, viewportOnce } from "@/lib/motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, ease: easeSmooth }}
      className="py-8 px-4 border-t border-border text-center"
    >
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Balram DD. Built with passion & clean code.
      </p>
    </motion.footer>
  );
};

export default Footer;
