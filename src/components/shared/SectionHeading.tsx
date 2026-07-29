"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
  color?: "blue" | "yellow" | "red" | "green" | "black";
}

const colorMap = {
  blue: "bg-[#2563EB]",
  yellow: "bg-[#FACC15]",
  red: "bg-[#EF4444]",
  green: "bg-[#22C55E]",
  black: "bg-black",
};

export function SectionHeading({ title, className, color = "yellow" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 inline-block", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight relative z-10"
      >
        {title}
        <motion.span 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute bottom-0 left-0 w-full h-4 md:h-6 -z-10 origin-left brutal-border",
            colorMap[color]
          )}
        />
      </motion.h2>
    </div>
  );
}
