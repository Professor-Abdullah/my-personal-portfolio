import React from "react";
import Link from "next/link";
import { personalInfo, socialLinks, navItems } from "@/constants/data";
import { BackToTop } from "../shared/BackToTop";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-8">
          {/* Brand/About */}
          <div className="sm:col-span-2 md:col-span-5 flex flex-col items-start gap-3 sm:gap-4">
            <Link 
              href="/" 
              className="font-black text-2xl sm:text-3xl uppercase tracking-tighter inline-flex items-center min-h-[44px] hover:-translate-y-1 transition-transform"
              aria-label="Home page"
            >
              {personalInfo.name.split(" ")[0]}
            </Link>
            <p className="text-black font-medium text-base sm:text-lg max-w-sm">
              {personalInfo.title}
            </p>
            <p className="text-gray-600 font-mono text-xs sm:text-sm">
              Building bold solutions with raw code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3 sm:gap-4">
            <h3 className="font-black text-lg sm:text-xl uppercase mb-1 inline-block border-b-4 border-[#2563EB] pb-1 self-start">
              Links
            </h3>
            <ul className="flex flex-col gap-1">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-bold uppercase text-sm hover:text-[#2563EB] hover:pl-2 transition-all min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4">
            <h3 className="font-black text-lg sm:text-xl uppercase mb-1 inline-block border-b-4 border-[#FACC15] pb-1 self-start">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center brutal-border shadow-brutal-sm sm:shadow-brutal bg-white hover:bg-black hover:text-white hover:-translate-y-1 transition-all"
                  aria-label={link.name}
                  title={link.name}
                >
                  <link.icon size={22} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t-4 border-black flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs font-bold uppercase text-gray-500">
            Designed with <span className="text-black">Brutalism</span>
          </p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
