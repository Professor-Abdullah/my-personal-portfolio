import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  liveDemo?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  coursework: string[];
}

export interface Skill {
  name: string;
  icon?: LucideIcon | string;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  duration: string;
  badge?: string;
  image?: string;
}

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  whatsapp: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface StatCard {
  label: string;
  value: string;
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}
