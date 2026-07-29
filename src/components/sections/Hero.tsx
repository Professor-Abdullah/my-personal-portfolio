"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { personalInfo, statistics, socialLinks } from "@/constants/data";
import { BrutalButton } from "../shared/BrutalButton";
import { BrutalCard } from "../shared/BrutalCard";
import { BrutalImage } from "../shared/BrutalImage";

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 md:pt-32 flex flex-col justify-center relative overflow-hidden bg-[#F8F8F8] dot-grid">
      {/* Decorative Background Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-32 right-[10%] w-32 h-32 bg-[#2563EB] brutal-border -z-10 hidden lg:block"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-40 left-[5%] w-24 h-24 bg-[#FACC15] brutal-border -z-10 hidden lg:block"
      />
      <motion.div 
        animate={{ x: [0, 40, 0], rotate: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-1/2 left-[40%] w-16 h-16 bg-[#EF4444] brutal-border -z-10 hidden lg:block"
      />

      <div className="container mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-black text-white px-4 py-2 font-mono font-bold uppercase text-sm md:text-base brutal-border mb-6"
            >
              Hey, I'm
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-black"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 md:h-16 mb-6 flex items-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white bg-[#2563EB] brutal-border px-4 py-2 inline-block"
                >
                  {personalInfo.roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl font-medium max-w-xl mb-10 border-l-4 border-black pl-4 py-2 bg-white/50 backdrop-blur-sm"
            >
              {personalInfo.summary.split(".")[0]}.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="/resume/Hafiz_Abdullah_Resume.pdf" download>
                <BrutalButton variant="accent-yellow" className="text-lg py-4 px-8">
                  <Download size={20} />
                  Download Resume
                </BrutalButton>
              </a>
              <a href="#contact">
                <BrutalButton variant="primary" className="text-lg py-4 px-8">
                  Get In Touch
                  <ArrowRight size={20} />
                </BrutalButton>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 mt-8"
            >
              {socialLinks.slice(0, 3).map((link, i) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center brutal-border bg-white shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 hover:-translate-x-1 transition-all text-black hover:bg-black hover:text-white"
                  title={link.name}
                >
                  <link.icon size={24} strokeWidth={2} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] aspect-square">
              <div className="absolute inset-0 bg-[#FACC15] brutal-border -right-4 -bottom-4 translate-x-4 translate-y-4 -z-10" />
              <BrutalImage
                src="/images/profile.png"
                alt={personalInfo.name}
                fill
                priority
                containerClassName="w-full h-full !rotate-0"
                imageClassName="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20"
        >
          {statistics.map((stat, idx) => (
            <BrutalCard key={idx} className="p-4 md:p-6 flex flex-col items-center justify-center text-center group hover:bg-[#2563EB] hover:text-white transition-colors">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 flex items-center justify-center gap-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <p className="font-mono text-xs md:text-sm font-bold uppercase">
                {stat.label}
              </p>
            </BrutalCard>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .dot-grid {
          background-image: radial-gradient(#000 2px, transparent 2px);
          background-size: 30px 30px;
          background-color: #F8F8F8;
        }
      `}</style>
    </section>
  );
}
