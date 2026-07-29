"use client";

import React from "react";
import { certificationsData } from "@/constants/data";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { BrutalCard } from "../shared/BrutalCard";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#E5E7EB] relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading title="Certifications" color="blue" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {certificationsData.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 0.1}>
              <BrutalCard className="h-full flex flex-col p-6 hover:bg-black hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-[#2563EB] text-white flex items-center justify-center brutal-border mb-6">
                  <Award size={24} />
                </div>

                {cert.image && (
                  <div className="relative w-full aspect-[4/3] mb-6 bg-gray-100 brutal-border overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-[#FACC15] transition-colors line-clamp-3">
                    {cert.name}
                  </h3>
                  
                  <h4 className="text-sm font-bold font-mono text-gray-600 group-hover:text-gray-400 mb-6">
                    {cert.provider}
                  </h4>
                </div>

                <div className="inline-block bg-white text-black font-mono text-sm px-3 py-1 font-bold brutal-border self-start mt-4">
                  {cert.duration}
                </div>
              </BrutalCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
