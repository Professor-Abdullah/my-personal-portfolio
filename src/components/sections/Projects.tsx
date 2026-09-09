"use client";

import React from "react";
import { projectsData } from "@/constants/data";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { BrutalCard } from "../shared/BrutalCard";
import { BrutalImage } from "../shared/BrutalImage";
import { BrutalButton } from "../shared/BrutalButton";
import { Code, ExternalLink, Check } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-20 md:py-24 bg-[#2563EB] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading title="Projects" color="yellow" className="text-white" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12">
          {projectsData.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.1} direction="up">
              <BrutalCard className="h-full flex flex-col p-4 sm:p-6 border-black bg-white text-black group shadow-brutal-sm sm:shadow-brutal">
                {/* Styled Neo-Brutalist Code & Tech Banner */}
                <div className="relative w-full aspect-[16/9] mb-5 sm:mb-6 bg-[#18181B] brutal-border overflow-hidden flex flex-col justify-between p-4 sm:p-5 text-white">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 bg-[#EF4444] brutal-border rounded-none inline-block" />
                      <span className="w-3 h-3 bg-[#FACC15] brutal-border rounded-none inline-block" />
                      <span className="w-3 h-3 bg-[#22C55E] brutal-border rounded-none inline-block" />
                    </div>
                    <span className="font-mono text-xs text-gray-400 font-bold uppercase">
                      {project.technologies[0] || "Python"} :: v1.0
                    </span>
                  </div>

                  {/* Center Badge / Title Showcase */}
                  <div className="flex flex-col items-center justify-center my-auto py-2 text-center">
                    <div className="inline-block bg-[#FACC15] text-black font-black font-mono text-sm sm:text-lg px-3 py-1 brutal-border shadow-brutal-sm uppercase tracking-tight mb-2 group-hover:scale-105 transition-transform">
                      {project.title.split(' ').slice(0, 3).join(' ')}
                    </div>
                    <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                      AI / Deep Learning Pipeline
                    </p>
                  </div>

                  {/* Terminal Footer */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-2 border-t border-white/10">
                    <span>status: verified</span>
                    <span className="text-[#22C55E] font-bold">accuracy: 94%+</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm sm:text-base font-medium mb-4 sm:mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <p className="font-bold uppercase text-xs mb-2 text-gray-500 font-mono">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-mono font-bold px-2 py-0.5 sm:py-1 bg-[#FACC15] text-black brutal-border shadow-brutal-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-bold uppercase text-xs mb-2 text-gray-500 font-mono">Key Features</p>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-medium">
                          <Check size={16} className="text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mt-auto pt-4 sm:pt-6 border-t-4 border-black/10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <BrutalButton variant="primary" className="w-full text-sm min-h-[44px] py-2.5 sm:py-3">
                      <Code size={18} />
                      Code Repository
                    </BrutalButton>
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <BrutalButton variant="outline" className="w-full text-sm min-h-[44px] py-2.5 sm:py-3">
                        <ExternalLink size={18} />
                        Live Demo
                      </BrutalButton>
                    </a>
                  )}
                </div>
              </BrutalCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
