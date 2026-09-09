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
    <section id="hero" className="min-h-screen pt-24 pb-12 sm:pt-28 md:pt-32 flex flex-col justify-center relative overflow-hidden bg-[#F8F8F8] dot-grid">
      {/* Decorative Background Shapes (Desktop only) */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 font-mono font-bold uppercase text-xs sm:text-sm md:text-base brutal-border"
              >
                Hey, I'm
              </motion.div>
              {/* Mobile identity badge */}
              <div className="lg:hidden flex items-center gap-2 bg-[#FACC15] brutal-border px-2.5 py-1 shadow-brutal-sm">
                <div className="w-6 h-6 brutal-border overflow-hidden relative bg-white shrink-0">
                  <img src="/images/profile.png" alt={personalInfo.name} className="w-full h-full object-cover object-top" />
                </div>
                <span className="font-mono font-bold text-xs uppercase text-black">Hafiz</span>
              </div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] sm:leading-[0.9] mb-4 text-black break-words"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-auto min-h-10 md:h-16 mb-4 sm:mb-6 flex items-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase text-white bg-[#2563EB] brutal-border px-3 py-1.5 sm:px-4 sm:py-2 inline-block shadow-brutal-sm"
                >
                  {personalInfo.roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl font-medium max-w-xl mb-6 sm:mb-10 border-l-4 border-black pl-4 py-2 bg-white/80 backdrop-blur-xs"
            >
              {personalInfo.summary.split(".")[0]}.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a href="/resume/Hafiz_Abdullah_Resume.pdf" download className="w-full sm:w-auto">
                <BrutalButton variant="accent-yellow" className="text-base sm:text-lg py-3.5 sm:py-4 px-6 sm:px-8 w-full sm:w-auto">
                  <Download size={20} />
                  Download Resume
                </BrutalButton>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <BrutalButton variant="primary" className="text-base sm:text-lg py-3.5 sm:py-4 px-6 sm:px-8 w-full sm:w-auto">
                  Get In Touch
                  <ArrowRight size={20} />
                </BrutalButton>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              {socialLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center brutal-border bg-white shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1 transition-all text-black hover:bg-black hover:text-white"
                  title={link.name}
                  aria-label={link.name}
                >
                  <link.icon size={22} strokeWidth={2} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-square mr-2 mb-2 sm:mr-4 sm:mb-4">
              <div className="absolute inset-0 bg-[#FACC15] brutal-border translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 -z-10" />
              <BrutalImage
                src="/images/profile.png"
                alt={personalInfo.name}
                fill
                priority
                containerClassName="w-full h-full !rotate-0 bg-white"
                imageClassName="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8 sm:mt-12 md:mt-16"
        >
          {statistics.map((stat, idx) => (
            <BrutalCard key={idx} className="p-3.5 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center group hover:bg-[#2563EB] hover:text-white transition-colors">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 flex items-center justify-center gap-1.5 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <p className="font-mono text-[10px] sm:text-xs md:text-sm font-bold uppercase leading-tight">
                {stat.label}
              </p>
            </BrutalCard>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .dot-grid {
          background-image: radial-gradient(rgba(0, 0, 0, 0.12) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          background-color: #F8F8F8;
        }
      `}</style>
    </section>
  );
}
