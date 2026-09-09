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
    <div
      className={cn(
        "brutal-border shadow-brutal-sm sm:shadow-brutal bg-white px-3 py-2.5 sm:p-4 flex items-center justify-center text-center transition-all duration-200 cursor-default select-none hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5",
        colorMap[color],
        className
      )}
    >
      {Icon && typeof Icon !== "string" && (
        <Icon size={18} className="sm:w-6 sm:h-6 shrink-0 mr-2 sm:mr-0 sm:mb-2" strokeWidth={1.75} />
      )}
      <span className="font-mono text-xs sm:text-sm font-bold text-center break-words leading-tight">
        {name}
      </span>
    </div>
  );
}
