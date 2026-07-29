"use client";

import React from "react";
import { personalInfo } from "@/constants/data";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { BrutalCard } from "../shared/BrutalCard";
import { ArrowRight, Brain, Code2, Shield } from "lucide-react";

export function About() {
  const highlights = [
    { title: "AI & Deep Learning", desc: "Building intelligent predictive models.", icon: Brain, color: "bg-[#2563EB]" },
    { title: "Cybersecurity", desc: "Understanding threats and ethical hacking.", icon: Shield, color: "bg-[#EF4444]" },
    { title: "Software Eng", desc: "Writing clean, scalable code.", icon: Code2, color: "bg-[#FACC15]" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading title="About Me" color="blue" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          {/* Left: Text & Summary */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <div className="prose prose-lg max-w-none font-medium leading-relaxed border-l-4 border-black pl-6 py-2 mb-10">
                <p className="text-xl md:text-2xl font-mono uppercase font-bold text-black mb-4">
                  Driven to solve complex problems with AI.
                </p>
                <p className="text-gray-700">
                  {personalInfo.summary}
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-6">
                <h3 className="font-black text-2xl uppercase tracking-tight">Core Focus Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((item, idx) => (
                    <BrutalCard key={idx} className="p-4 flex items-start gap-4">
                      <div className={`w-12 h-12 flex items-center justify-center brutal-border ${item.color} text-white shrink-0`}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold uppercase text-sm mb-1">{item.title}</h4>
                        <p className="text-xs font-mono text-gray-600">{item.desc}</p>
                      </div>
                    </BrutalCard>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Brutalist Decorative Box */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <ScrollReveal delay={0.4} direction="left" className="w-full">
              <div className="relative w-full max-w-md aspect-square mx-auto">
                <div className="absolute inset-0 bg-[#FACC15] brutal-border rotate-3 transition-transform hover:rotate-6 duration-300" />
                <div className="absolute inset-0 bg-[#2563EB] brutal-border -rotate-3 transition-transform hover:-rotate-6 duration-300" />
                <div className="absolute inset-0 bg-white brutal-border flex flex-col items-center justify-center p-8 text-center gap-6 z-10 transition-transform hover:scale-105 duration-300">
                  <div className="w-24 h-24 bg-black text-white brutal-border flex items-center justify-center rounded-none rotate-12">
                    <Code2 size={48} />
                  </div>
                  <div>
                    <h3 className="font-black text-4xl uppercase tracking-tighter mb-2">CS Student</h3>
                    <p className="font-mono font-bold text-sm text-gray-600 uppercase">Class of 2028</p>
                  </div>
                  <a href="#projects" className="flex items-center gap-2 font-bold uppercase hover:text-[#2563EB] transition-colors mt-4">
                    View My Work <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
