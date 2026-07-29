"use client";

import React, { useState } from "react";
import { personalInfo, contactInfo, socialLinks } from "@/constants/data";
import { SectionHeading } from "../shared/SectionHeading";
import { ScrollReveal } from "../shared/ScrollReveal";
import { BrutalCard } from "../shared/BrutalCard";
import { BrutalButton } from "../shared/BrutalButton";
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
      
      if (submitStatus === "success") {
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    }
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, '')}` },
    { icon: MapPin, label: "Location", value: contactInfo.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading title="Get In Touch" color="red" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal delay={0.2}>
              <div className="prose prose-lg mb-8">
                <p className="text-xl font-bold font-mono uppercase">
                  Let's build something bold together.
                </p>
                <p className="text-gray-700 font-medium">
                  Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4">
                {contactMethods.map((method, idx) => (
                  <BrutalCard key={idx} className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center brutal-border shrink-0">
                      <method.icon size={20} />
                    </div>
                    <div>
                      <p className="font-bold uppercase text-xs text-gray-500">{method.label}</p>
                      {method.href ? (
                        <a href={method.href} className="font-mono font-bold text-sm md:text-base hover:text-[#2563EB] transition-colors break-all">
                          {method.value}
                        </a>
                      ) : (
                        <p className="font-mono font-bold text-sm md:text-base break-all">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </BrutalCard>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-4">
                <h3 className="font-black text-xl uppercase mb-4">Find Me Online</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center brutal-border bg-white shadow-brutal hover:bg-[#FACC15] hover:text-black hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
                      title={link.name}
                    >
                      <link.icon size={28} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.5} className="h-full">
              <BrutalCard className="p-6 md:p-10 h-full bg-[#F8F8F8]">
                <h3 className="font-black text-3xl uppercase tracking-tighter mb-8">Send A Message</h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-bold uppercase text-sm">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="brutal-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-bold uppercase text-sm">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="brutal-input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-bold uppercase text-sm">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required 
                      className="brutal-input"
                      placeholder="Project Proposal"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-bold uppercase text-sm">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      required 
                      className="brutal-input resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <BrutalButton 
                    type="submit" 
                    variant="primary" 
                    className="mt-4 py-4 text-lg w-full md:w-auto md:self-start"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="animate-spin" size={24} /> Sending...</>
                    ) : (
                      <><Send size={24} /> Send Message</>
                    )}
                  </BrutalButton>

                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-[#22C55E] text-white p-4 brutal-border flex items-start gap-3 mt-4"
                      >
                        <CheckCircle className="shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold uppercase">Message Sent!</p>
                          <p className="text-sm font-medium">I'll get back to you as soon as possible.</p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-[#EF4444] text-white p-4 brutal-border flex items-start gap-3 mt-4"
                      >
                        <AlertCircle className="shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold uppercase">Error</p>
                          <p className="text-sm font-medium">{errorMessage}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </BrutalCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
