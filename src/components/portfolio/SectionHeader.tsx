import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  sectionHeaderContainer,
  sectionEyebrow,
  sectionTitle,
  sectionLine,
  viewportOnce,
} from "@/lib/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  className,
  descriptionClassName,
}: SectionHeaderProps) => {
  return (
    <motion.div
      className={cn("mb-12", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionHeaderContainer}
    >
      <motion.p
        variants={sectionEyebrow}
        className="font-display text-sm text-primary tracking-wider mb-2"
      >
        {eyebrow}
      </motion.p>
      <motion.h3 variants={sectionTitle} className="text-3xl md:text-4xl font-bold mb-2">
        {title}
      </motion.h3>
      <motion.div
        variants={sectionLine}
        className="h-1 w-20 bg-primary rounded-full origin-left"
      />
      {description ? (
        <motion.p
          variants={sectionTitle}
          className={cn("mt-4 text-muted-foreground max-w-2xl", descriptionClassName)}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
};
