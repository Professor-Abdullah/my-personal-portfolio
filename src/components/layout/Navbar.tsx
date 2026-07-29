"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, personalInfo } from "@/constants/data";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { BrutalButton } from "../shared/BrutalButton";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollDirection, isTop } = useScrollDirection();
  
  const sectionIds = navItems.map((item) => item.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b-4 border-black",
        scrollDirection === "down" && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0",
        isTop ? "shadow-none" : "shadow-brutal-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-black text-2xl uppercase tracking-tighter hover:scale-105 transition-transform">
          {personalInfo.name.split(" ")[0]}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-bold uppercase text-sm tracking-wide transition-colors hover:text-[#2563EB] relative",
                      isActive ? "text-[#2563EB]" : "text-black"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#2563EB] border border-black" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="flex items-center gap-3">
            <a href="/resume/Hafiz_Abdullah_Resume.pdf" download>
              <BrutalButton variant="accent-yellow" className="text-xs px-4 py-2 h-10">
                <Download size={16} />
                Resume
              </BrutalButton>
            </a>
            <Link href="#contact">
              <BrutalButton variant="primary" className="text-xs px-4 py-2 h-10">
                Hire Me
              </BrutalButton>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center p-2 brutal-border shadow-brutal-sm bg-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 border-l-4 border-black",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6 text-2xl font-black uppercase tracking-tight">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block w-full border-b-4 border-black pb-2 hover:pl-4 transition-all duration-200",
                    isActive ? "text-[#2563EB] pl-4 bg-gray-100" : "text-black"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <div className="mt-auto mb-12 flex flex-col gap-4">
          <a href="/resume/Hafiz_Abdullah_Resume.pdf" download className="w-full">
            <BrutalButton variant="accent-yellow" className="w-full py-4 text-lg">
              <Download size={20} />
              Download Resume
            </BrutalButton>
          </a>
          <Link href="#contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
            <BrutalButton variant="primary" className="w-full py-4 text-lg">
              Get In Touch
            </BrutalButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
