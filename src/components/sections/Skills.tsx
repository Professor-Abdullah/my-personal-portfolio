"use client";

import React from "react";
import { skillCategories } from "@/constants/data";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { SkillTile } from "../shared/SkillTile";
import { Code2, Brain, Shield, Wrench } from "lucide-react";

export function Skills() {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Programming": return Code2;
      case "AI / Machine Learning": return Brain;
      case "Cybersecurity": return Shield;
      default: return Wrench;
    }
  };

  const getColorForCategory = (category: string): "blue" | "yellow" | "red" | "green" => {
    switch (category) {
      case "Programming": return "blue";
      case "AI / Machine Learning": return "yellow";
      case "Cybersecurity": return "red";
      default: return "green";
    }
  };

  const getAccentColor = (category: string) => {
    switch (category) {
      case "Programming": return "bg-[#2563EB]";
      case "AI / Machine Learning": return "bg-[#FACC15]";
      case "Cybersecurity": return "bg-[#EF4444]";
      default: return "bg-[#22C55E]";
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading title="Technical Skills" color="green" />
        </ScrollReveal>

        <div className="flex flex-col gap-10 sm:gap-14 mt-8 sm:mt-12">
          {skillCategories.map((category, idx) => {
            const Icon = getIconForCategory(category.name);
            const colorName = getColorForCategory(category.name);
            const accentColor = getAccentColor(category.name);

            return (
              <div key={category.name} className="relative">
                <ScrollReveal delay={0.1}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-11 h-11 sm:w-14 sm:h-14 ${accentColor} brutal-border flex items-center justify-center shrink-0 shadow-brutal-sm`}>
                      <Icon size={24} className={colorName === "yellow" ? "text-black" : "text-white"} />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                </ScrollReveal>

                <ScrollReveal staggerChildren delay={0.15}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4 md:gap-5">
                    {category.skills.map((skill, i) => (
                      <SkillTile 
                        key={`${skill.name}-${i}`} 
                        name={skill.name} 
                        color={colorName}
                      />
                    ))}
                  </div>
                </ScrollReveal>
                
                {/* Section Separator */}
                {idx < skillCategories.length - 1 && (
                  <div className="w-full h-1 bg-black mt-10 sm:mt-14 brutal-border opacity-15" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
