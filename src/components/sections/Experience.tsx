"use client";

import React from "react";
import { experienceData } from "@/constants/data";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { BrutalCard } from "../shared/BrutalCard";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#F8F8F8] relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <ScrollReveal>
          <SectionHeading title="Experience" color="red" />
        </ScrollReveal>

        <div className="mt-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-black hidden md:block" />

          <div className="flex flex-col gap-12">
            {experienceData.map((exp, idx) => (
              <ScrollReveal 
                key={exp.id} 
                delay={idx * 0.2}
                direction={idx % 2 === 0 ? "left" : "right"}
              >
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 md:ml-16">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[4.2rem] top-6 w-6 h-6 bg-[#EF4444] brutal-border z-10 hidden md:block" />
                  
                  {/* Duration Badge for Mobile */}
                  <div className="md:hidden">
                    <div className="inline-flex items-center gap-2 bg-[#EF4444] text-white font-mono font-bold text-sm px-4 py-2 brutal-border">
                      <Briefcase size={16} />
                      {exp.duration}
                    </div>
                  </div>

                  <BrutalCard className="flex-1 p-6 md:p-8 relative group">
                    {/* Duration Badge for Desktop */}
                    <div className="hidden md:flex absolute -top-4 -right-4 bg-[#EF4444] text-white font-mono font-bold text-sm px-4 py-2 brutal-border items-center gap-2 group-hover:-translate-y-1 transition-transform">
                      <Briefcase size={16} />
                      {exp.duration}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl font-bold font-mono text-[#2563EB] mb-6">
                      @ {exp.company}
                    </h4>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2.5 bg-black brutal-border shrink-0" />
                          <span className="text-base font-medium">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </BrutalCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
