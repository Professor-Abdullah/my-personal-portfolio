"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SkillTileProps {
  name: string;
  icon?: LucideIcon | string;
  className?: string;
  color?: "blue" | "yellow" | "red" | "green";
}

const colorMap = {
  blue: "hover:bg-[#2563EB] hover:text-white",
  yellow: "hover:bg-[#FACC15] hover:text-black",
  red: "hover:bg-[#EF4444] hover:text-white",
  green: "hover:bg-[#22C55E] hover:text-white",
};

export function SkillTile({ name, icon: Icon, className, color = "yellow" }: SkillTileProps) {
  return (
    <motion.div
      whileHover={{ y: -4, x: -4 }}
      className={cn(
        "brutal-border shadow-brutal bg-white p-4 flex flex-col items-center justify-center gap-3 transition-colors duration-200 cursor-pointer",
        colorMap[color],
        className
      )}
    >
      {Icon && typeof Icon !== "string" && <Icon size={32} strokeWidth={1.5} />}
      <span className="font-mono text-sm md:text-base font-bold text-center break-words leading-tight">
        {name}
      </span>
    </motion.div>
  );
}
