# Project Requirements

## Project Overview

Build a production-ready full-stack portfolio website using the provided resume data.

The website should be fully responsive, performant, SEO optimized, and production ready.

---

# Technology Stack

## Languages

- TypeScript
- HTML
- CSS

## Frameworks

- Next.js (Latest App Router)
- React 19
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Icons

- Lucide React

## Email

- Nodemailer
- Gmail SMTP

## Deployment

- Vercel Ready

---

# Folder Structure

```
app/
components/
components/layout/
components/ui/
components/sections/
components/shared/
lib/
hooks/
actions/
constants/
types/
styles/
public/
```

---

# Website Sections

## Hero

Include:

- Profile Picture
- Greeting
- Full Name
- Professional Title
- Animated Role Switcher
- Professional Summary
- Download Resume Button
- Contact Button
- GitHub
- LinkedIn
- Statistics Cards

---

## About

Include:

- Professional Summary
- Experience
- Education

---

## Experience

Each card should contain:

- Company
- Position
- Duration
- Responsibilities

---

## Education

Display:

- Degree
- University
- Duration
- Relevant Coursework

Timeline layout.

---

## Skills

Organize skills into categories:

- Programming
- AI / Machine Learning
- Cybersecurity
- Tools

---

## Projects

Each project should include:

- Image
- Title
- Description
- Technology Stack
- Features
- GitHub Link
- Live Demo (if available)

---

## Certifications

Display:

- Certificate Name
- Provider
- Duration
- Badge

---

## Contact

Include:

- Name
- Email
- Subject
- Message

Also display:

- GitHub
- LinkedIn
- Email
- Phone

---

# Contact Form

Use:

- Nodemailer
- Gmail SMTP

Environment Variables

```
EMAIL_USER=
EMAIL_PASS=
OWNER_EMAIL=
```

Create:

```
app/api/contact/route.ts
```

Requirements

- Validate all fields
- Handle errors
- Return proper JSON
- Display success and failure states
- Prevent spam

---

# Global Features

Include:

- Responsive Design
- SEO
- Metadata
- Open Graph
- Twitter Cards
- robots.ts
- sitemap.ts
- JSON-LD
- Accessibility
- Keyboard Navigation
- Lazy Loading
- Image Optimization
- Active Navigation
- Back To Top Button
- Loading States
- Error States
- Reusable Components
- Type Safety

---

# Performance

Implement:

- Dynamic Imports
- Lazy Loading
- Optimized Images
- Server Components where appropriate
- Avoid unnecessary re-renders

---

# Code Standards

Use:

- Reusable Components
- TypeScript Interfaces
- Constants
- Utility Functions
- Custom Hooks
- Clean Folder Structure
- Well-organized code
- No duplicated logic

---

# SEO

Implement:

- Metadata API
- robots.ts
- sitemap.ts
- Open Graph
- Twitter Cards
- JSON-LD
- Semantic HTML

---

# Accessibility

Implement:

- Semantic HTML
- Keyboard Navigation
- ARIA Labels
- Visible Focus States
- Accessible Forms

---

# Content Source

Populate all sections using the provided resume.

Use the resume for:

- Hero
- About
- Experience
- Education
- Skills
- Projects
- Certifications
- Contact Information

Do not invent information that is not present in the resume.

---

# Deliverables

Generate:

- Complete Next.js project
- Production-ready folder structure
- All pages
- All reusable components
- Tailwind configuration
- shadcn/ui integration
- Framer Motion animations
- Nodemailer contact form
- API Route
- `.env.example`
- `README.md`
- Clean Architecture
- Type-safe code
- Responsive layouts
- Vercel-ready application