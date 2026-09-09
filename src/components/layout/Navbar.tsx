"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, ArrowRight } from "lucide-react";
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

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-40 transition-transform duration-300 bg-white border-b-4 border-black",
          scrollDirection === "down" && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0",
          isTop ? "shadow-none" : "shadow-brutal-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link 
            href="/" 
            className="font-black text-2xl uppercase tracking-tighter hover:scale-105 transition-transform min-h-[44px] flex items-center"
            aria-label="Home page"
          >
            {personalInfo.name.split(" ")[0]}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "font-bold uppercase text-sm tracking-wide transition-colors hover:text-[#2563EB] relative py-2",
                        isActive ? "text-[#2563EB]" : "text-black"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#2563EB] border border-black" />
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

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-12 h-12 brutal-border shadow-brutal-sm bg-white active:scale-95 transition-transform"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Rendered outside header to avoid transform containing block trap) */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
        )}
      >
        {/* Backdrop Scrim */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 w-[85vw] max-w-sm h-full bg-white border-l-4 border-black shadow-brutal-lg flex flex-col transition-transform duration-300 ease-out z-10",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer Top Header */}
          <div className="h-20 px-6 border-b-4 border-black flex items-center justify-between bg-[#F8F8F8] shrink-0">
            <span className="font-black text-xl uppercase tracking-tight">Navigation</span>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="w-11 h-11 flex items-center justify-center brutal-border bg-white active:scale-95 transition-transform"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 min-h-[48px] font-mono text-base font-bold uppercase tracking-tight brutal-border transition-all duration-150",
                        isActive
                          ? "bg-[#2563EB] text-white shadow-brutal-sm translate-x-1"
                          : "bg-white text-black hover:bg-gray-100"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={18} className={isActive ? "text-white" : "text-black/50"} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* Drawer Footer Actions */}
          <div className="p-6 border-t-4 border-black bg-[#F8F8F8] flex flex-col gap-3 shrink-0">
            <a href="/resume/Hafiz_Abdullah_Resume.pdf" download className="w-full">
              <BrutalButton variant="accent-yellow" className="w-full py-3 text-base">
                <Download size={18} />
                Download Resume
              </BrutalButton>
            </a>
            <Link href="#contact" className="w-full" onClick={closeMobileMenu}>
              <BrutalButton variant="primary" className="w-full py-3 text-base">
                Get In Touch
              </BrutalButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
