"use client";

import React from "react";
import { educationData } from "@/constants/data";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { BrutalCard } from "../shared/BrutalCard";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-[#FACC15] relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)'
        }} 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <ScrollReveal>
          <SectionHeading title="Education" color="black" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {educationData.map((edu, idx) => (
            <ScrollReveal key={edu.id} delay={idx * 0.2}>
              <BrutalCard className="h-full flex flex-col p-6 md:p-8 bg-white hover:bg-[#2563EB] hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center brutal-border mb-6 group-hover:bg-[#FACC15] group-hover:text-black transition-colors">
                  <GraduationCap size={24} />
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                  {edu.degree}
                </h3>
                
                <h4 className="text-lg font-bold font-mono mb-4 text-gray-700 group-hover:text-gray-200">
                  {edu.institution}
                </h4>
                
                <div className="inline-block bg-black text-white font-mono text-sm px-3 py-1 font-bold brutal-border mb-6 group-hover:bg-white group-hover:text-black transition-colors self-start">
                  {edu.duration}
                </div>

                {edu.coursework.length > 0 && (
                  <div className="mt-auto pt-6 border-t-4 border-black/10 group-hover:border-white/20">
                    <p className="font-bold uppercase text-sm mb-3">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-mono font-bold px-2 py-1 bg-gray-100 text-black brutal-border"
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
