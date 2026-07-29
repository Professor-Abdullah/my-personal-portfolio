import React from "react";
import Link from "next/link";
import { personalInfo, socialLinks, navItems } from "@/constants/data";
import { BackToTop } from "../shared/BackToTop";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-black relative">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand/About */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="font-black text-3xl uppercase tracking-tighter inline-block hover:-translate-y-1 transition-transform">
              {personalInfo.name.split(" ")[0]}
            </Link>
            <p className="text-black font-medium text-lg max-w-sm">
              {personalInfo.title}
            </p>
            <p className="text-gray-600 font-mono text-sm">
              Building bold solutions with raw code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-black text-xl uppercase mb-2 inline-block border-b-4 border-[#2563EB] pb-1">
              Links
            </h3>
            <ul className="flex flex-col gap-3">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-bold uppercase text-sm hover:text-[#2563EB] hover:pl-2 transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="font-black text-xl uppercase mb-2 inline-block border-b-4 border-[#FACC15] pb-1">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center brutal-border shadow-brutal bg-white hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                  aria-label={link.name}
                >
                  <link.icon size={24} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm font-bold uppercase">
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
