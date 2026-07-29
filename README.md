# Hafiz Abdullah - AI/ML Engineer Portfolio

A brutalist personal portfolio built with Next.js 15, Tailwind CSS v4, Framer Motion, and TypeScript.

## Features

- **Brutalist Design**: Pure brutalism with zero border-radius, hard shadows, thick borders, and high-contrast colors.
- **Tech Stack**: Next.js 15 (App Router), React 19, Tailwind CSS v4, Framer Motion.
- **Components**: `shadcn/ui` components tailored for a brutalist aesthetic.
- **Dynamic Content**: Data is driven from centralized constants, making it easy to update.
- **Contact Form**: API route integrating `nodemailer` for handling inquiries.
- **SEO Ready**: `sitemap.xml` and `robots.txt` configured out-of-the-box.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your SMTP credentials for the contact form:
   ```bash
   cp .env.example .env
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- **Styling**: Update brutalist design tokens (colors, shadows, borders) in `src/app/globals.css`.
- **Content**: Update your personal data, experience, and projects in `src/constants/data.ts`.
- **Metadata**: Modify site title, description, and SEO data in `src/constants/metadata.ts`.

## Deployment

Deploy easily to Vercel or any Next.js-compatible hosting platform. Don't forget to add your `.env` variables to the hosting environment.

## License

MIT License
