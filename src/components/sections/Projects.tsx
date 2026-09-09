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
    <section id="projects" className="py-24 bg-[#2563EB] relative text-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading title="Projects" color="yellow" className="text-white" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12">
          {projectsData.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.1}>
              <BrutalCard className="h-full flex flex-col p-6 border-black bg-white text-black group">
                {/* Image */}
                <div className="relative w-full aspect-video mb-6 bg-gray-100 brutal-border overflow-hidden">
                  {/* We use a simple colored background with text for placeholder since actual images might not exist yet */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white font-mono uppercase font-black text-xl z-0">
                    {project.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110" 
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        (e.target as HTMLImageElement).style.opacity = '0';
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 font-medium mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="font-bold uppercase text-xs mb-2 text-gray-500">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-mono font-bold px-2 py-1 bg-[#FACC15] text-black brutal-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="font-bold uppercase text-xs mb-2 text-gray-500">Key Features</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-medium">
                          <Check size={16} className="text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 border-t-4 border-black/10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <BrutalButton variant="primary" className="w-full text-sm">
                      <Code size={18} />
                      Code
                    </BrutalButton>
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <BrutalButton variant="outline" className="w-full text-sm">
                        <ExternalLink size={18} />
                        Live
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
