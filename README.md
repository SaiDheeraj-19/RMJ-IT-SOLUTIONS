<p align="center">
  <img src="public/techbro-logo.png" width="200" alt="TechBro Solutions Logo" />
</p>

<h1 align="center">TECHBRO SOLUTIONS</h1>
<p align="center"><strong>Engineering Digital Infrastructure That Scales.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-EE4B89?style=flat-square" />
  <img src="https://img.shields.io/badge/License-Private-red?style=flat-square" />
</p>

---

## Overview

**TechBro Solutions** is a full-service IT company website built with a premium, modern design system. The platform showcases services ranging from mobile application development to AI/ML, cloud solutions, ERP systems, cybersecurity, and digital marketing — all with a cinematic, light-first UI and smooth micro-animations.

> Built for Performance. Designed for Impact.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16.1.6 (App Router) |
| **UI Library** | React 19 + Experimental React Compiler |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 + Vanilla CSS Variables |
| **Animations** | Framer Motion 12 + GSAP 3 |
| **Scroll** | Lenis (inertial smooth scroll) |
| **Icons** | Lucide React |
| **Email** | Resend (Server Actions) |
| **Font** | Inter Tight + DM Mono (Google Fonts) |

---

## Features

- **Premium Light/Dark Mode** — Seamless theme switching with CSS variable design tokens
- **Platform Selector UX** — Mobile Apps page starts with an interactive iOS / Android / Both selector gate before showing content
- **Expandable Flutter Section** — Detailed Flutter info section with feature grid, native vs cross-platform comparison, and CTA
- **Cinematic Hero Sections** — Full-screen heroes with floating ambient orbs, dot grids, and gradient text
- **Animated Transitions** — `framer-motion` powered page and component transitions throughout
- **SEO Ready** — Proper `h1` hierarchy, meta tags, semantic HTML, and unique IDs
- **Contact Form** — Server Action powered contact with Resend email delivery
- **Tech Stack Marquee** — Infinite scrolling marquee showcasing technology expertise
- **Responsive Design** — Mobile-first grid system across all breakpoints

---

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, providers, nav, footer)
│   ├── page.tsx                  # Home page
│   ├── about/                    # About Us page
│   ├── contact/                  # Contact page (Server Action form)
│   ├── services/                 # Services landing + individual service pages
│   │   ├── page.tsx              # Services overview
│   │   ├── mobile-apps/          # ★ Mobile Applications (platform selector flow)
│   │   ├── web-applications/     # Web Applications
│   │   ├── ai-ml/                # AI & Machine Learning
│   │   ├── cloud/                # Cloud Solutions
│   │   ├── erp/                  # ERP Systems
│   │   ├── security/             # Cybersecurity
│   │   ├── automation/           # Automation
│   │   ├── digital-marketing/    # Digital Marketing
│   │   └── hpc/                  # High Performance Computing
│   ├── solutions/                # Solutions overview page
│   ├── industries/               # Industries served
│   ├── process/                  # Our process / methodology
│   ├── careers/                  # Careers page
│   └── globals.css               # Global design tokens + utilities
│
├── components/
│   ├── layout/                   # Navbar, Footer, Cookie Banner
│   ├── sections/                 # Page section components
│   │   ├── Hero.tsx              # Home hero
│   │   ├── Services.tsx          # Services grid
│   │   ├── Capabilities.tsx      # Core capabilities
│   │   ├── TechStackMarquee.tsx  # Infinite scroll tech logos
│   │   ├── Process.tsx           # Delivery process steps
│   │   ├── WhyRMJIT.tsx          # Why choose us
│   │   ├── SectorsImpact.tsx     # Industry sectors
│   │   ├── Portfolio.tsx         # Work showcase
│   │   ├── FAQ.tsx               # FAQ accordion
│   │   ├── ContactSection.tsx    # Contact form section
│   │   └── ...                   # 30 total section components
│   ├── animations/               # Reusable animation wrappers
│   ├── ui/                       # Atomic UI components
│   └── providers/                # Theme + Lenis scroll providers
│
└── lib/                          # Shared utilities
```

---

## Services Covered

| Service | Route | Description |
|---|---|---|
| Mobile Apps | `/services/mobile-apps` | iOS, Android & Flutter development with platform selector flow |
| Web Applications | `/services/web-applications` | Full-stack web app development |
| AI & Machine Learning | `/services/ai-ml` | ML models, NLP, computer vision |
| Cloud Solutions | `/services/cloud` | AWS, GCP, Azure architecture & DevOps |
| ERP Systems | `/services/erp` | Custom ERP implementation & integration |
| Cybersecurity | `/services/security` | Pen testing, compliance, threat monitoring |
| Automation | `/services/automation` | RPA, workflow, process automation |
| Digital Marketing | `/services/digital-marketing` | SEO, SEM, social & content strategy |
| HPC | `/services/hpc` | High-performance computing solutions |

---

## Design System

Colour tokens are defined in `globals.css` and switch automatically between light and dark mode:

```css
/* Dark mode (default) */
:root {
  --background: #0a0b0c;
  --foreground: #fafafa;
  --brand:      #b05d41;   /* Warm terracotta — primary accent */
  --surface:    #111111;
  --border:     #282828;
}

/* Light mode */
:root[data-theme="light"] {
  --background: #f5f3ef;
  --foreground: #0a0b0c;
  --brand:      #b05d41;
  --surface:    #e8e4df;
  --border:     #d0ccc6;
}
```

**Key utility classes:**

| Class | Purpose |
|---|---|
| `.btn-glow` | Primary glowing CTA button with radial gradient |
| `.btn-outline` | Secondary bordered button |
| `.text-gradient` | Fade-to-transparent gradient text effect |
| `.label-mono` | Small uppercase monospace labels / eyebrows |
| `.animate-marquee` | Infinite horizontal scroll (tech marquee) |

---

## Mobile Apps Page — Platform Selector Flow

The `/services/mobile-apps` page features a unique **multi-step UX**:

```
Landing → Platform Selector Gate
              ├── iOS App      → iOS-only content (Swift, SwiftUI, ARKit…)
              ├── Android App  → Android-only content (Kotlin, Jetpack Compose…)
              └── Both         → Side-by-side iOS + Android cards
                                    └── "Explore Flutter" → Expandable Flutter section
                                            ├── Feature grid (4 cards)
                                            ├── Flutter vs Native comparison
                                            └── Flutter project CTA → /contact
```

---

## Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm `>= 9.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SaiDheeraj-19/RMJ-IT-SOLUTIONS.git
cd "RMJ IT 2.0"

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Fill in your Resend API key in .env.local

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

```env
# .env.local
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your@email.com
```

### Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint |

---

## Deployment

The project is optimised for **Vercel** deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

Or connect the GitHub repo directly to Vercel for automatic CI/CD on every push to `main`.

---

## Recent Changelog

### v2.0 — March 2026
- **Mobile Apps Page**: Complete redesign with interactive platform selector gate (iOS / Android / Both)
- **Flutter Section**: Expandable detailed Flutter section with feature grid + comparison table
- **Design Refresh**: Removed dark card backgrounds; fully light-mode-compatible throughout
- **Section Labels**: Replaced `//` developer comment style with clean bold labels
- **Removed**: Fake stats counters and placeholder quality pill badges

---

## Repository

**GitHub:** [github.com/SaiDheeraj-19/RMJ-IT-SOLUTIONS](https://github.com/SaiDheeraj-19/RMJ-IT-SOLUTIONS)

---

<p align="center">
  <img src="public/Company-cuate.svg" width="360" alt="TechBro Solutions" />
</p>

<p align="center">
  <b>TechBro Solutions Pvt. Ltd.</b><br/>
  <i>Enabling Education · Empowering Tech</i><br/><br/>
  Developed & maintained by <b>R. Sai Dheeraj</b>
</p>
