"use client";

import React from "react";
import { educationData } from "@/constants/data";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { BrutalCard } from "../shared/BrutalCard";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-14 sm:py-20 md:py-24 bg-[#FACC15] relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)'
        }} 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Education" color="black" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {educationData.map((edu, idx) => (
            <ScrollReveal key={edu.id} delay={idx * 0.15} direction="up">
              <BrutalCard className="h-full flex flex-col p-5 sm:p-6 md:p-8 bg-white hover:bg-[#2563EB] hover:text-white transition-colors group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center brutal-border mb-4 sm:mb-6 group-hover:bg-[#FACC15] group-hover:text-black transition-colors shrink-0">
                  <GraduationCap size={22} />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-1 sm:mb-2">
                  {edu.degree}
                </h3>
                
                <h4 className="text-base sm:text-lg font-bold font-mono mb-3 sm:mb-4 text-gray-700 group-hover:text-gray-200">
                  {edu.institution}
                </h4>
                
                <div className="inline-block bg-black text-white font-mono text-xs sm:text-sm px-3 py-1 font-bold brutal-border mb-4 sm:mb-6 group-hover:bg-white group-hover:text-black transition-colors self-start shadow-brutal-sm">
                  {edu.duration}
                </div>

                {edu.coursework.length > 0 && (
                  <div className="mt-auto pt-4 sm:pt-6 border-t-4 border-black/10 group-hover:border-white/20">
                    <p className="font-bold uppercase text-xs sm:text-sm mb-2.5 sm:mb-3">Key Coursework:</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {edu.coursework.map((course, i) => (
                        <span 
                          key={i} 
                          className="text-[11px] sm:text-xs font-mono font-bold px-2 py-0.5 sm:py-1 bg-gray-100 text-black brutal-border"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </BrutalCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
