# Margarito Ramirez IT Solutions

**Dependable service. Clear communication.** — a polished, accessible IT-support website for modern businesses and remote professionals.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://mafzalkalwardev.github.io/margarito-ramirez-llc-nextjs-website/)

[Live website](https://mafzalkalwardev.github.io/margarito-ramirez-llc-nextjs-website/) · [Services](https://mafzalkalwardev.github.io/margarito-ramirez-llc-nextjs-website/services/) · [Request support](https://mafzalkalwardev.github.io/margarito-ramirez-llc-nextjs-website/support/)

---

## About

This is the official marketing website for **Margarito Ramirez IT Solutions**, the IT-support service brand of **MARGARITO RAMIREZ LLC**.

The site presents three focused service lines:

- **Managed IT Services** — monitoring, device management, and patch coordination
- **Cybersecurity & Threat Protection** — practical risk reduction, firewall support, hardening, and backup planning
- **Remote Helpdesk Support** — troubleshooting, software configuration, and desktop support

The content avoids invented guarantees and makes service scope, support hours, legal identity, and customer communication choices clear.

## Highlights

- Modern brand-first interface with a responsive animated hero
- Framer Motion interactions and reduced-motion support
- GSAP + ScrollTrigger reveals, parallax, staggered sections, and reading progress
- shadcn-style local UI primitives powered by CVA, `clsx`, and `tailwind-merge`
- Continuous capability scroller and responsive mobile navigation
- Shared site header, footer, metadata, and organization JSON-LD
- Dedicated support, service area, FAQ, privacy, terms, and SMS pages
- Separate contact and SMS consent flows
- Accessible focus states, semantic structure, and responsive layouts
- Static export optimized for GitHub Pages
- Custom SVG logo and browser-tab icon

## Tech stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | App Router, metadata, static export, and route composition |
| React 19 | Component architecture and interactive client experiences |
| TypeScript | Type-safe application and company configuration |
| Tailwind CSS 4 | Responsive design system and utility styling |
| Framer Motion | Hero, menu, hover, and component transitions |
| GSAP + ScrollTrigger | Scroll progress, reveals, stagger, and parallax |
| shadcn-style UI | Source-owned button and card primitives |
| Radix UI | Accessible FAQ accordion behavior |
| Lucide React | Consistent interface iconography |
| FormSubmit | Static-host-compatible form delivery |
| GitHub Pages | Production hosting |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Full marketing homepage |
| `/about/` | Company identity, purpose, and locations |
| `/services/` | Detailed IT service descriptions |
| `/support/` | IT support request form |
| `/contact/` | General contact and service inquiry |
| `/service-area/` | Remote support coverage |
| `/faq/` | Common support questions |
| `/sms-consent/` | Affirmative SMS enrollment and online opt-out |
| `/privacy/` | Privacy policy |
| `/terms/` | Website and service terms |
| `/sms-terms/` | Customer Care SMS terms |

## Project structure

```text
public/
  logo.svg                       Brand mark
src/
  app/
    */page.tsx                   Static-exported routes
    globals.css                  Design tokens and global motion
    icon.svg                     Browser-tab icon
    layout.tsx                   Shared metadata and site chrome
    page.tsx                     Animated homepage
  components/
    ui/                          shadcn-style UI primitives
    contact-form.tsx             General support/contact workflow
    hero-network.tsx             Framer Motion hero visualization
    scroll-experience.tsx        GSAP ScrollTrigger system
    site-header.tsx              Animated responsive navigation
    site-footer.tsx              Shared legal/contact footer
    sms-forms.tsx                Separate SMS consent and opt-out
  lib/
    company.ts                   Company and content source of truth
    utils.ts                     Class-name utility
docs/
  prd.md                         Product requirements
```

## Quick start

### Requirements

- Node.js 20 or newer
- npm
- Git

### Install and run

```bash
git clone https://github.com/mafzalkalwardev/margarito-ramirez-llc-nextjs-website.git
cd margarito-ramirez-llc-nextjs-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Type-check and create the static production export |
| `npm run deploy` | Build and publish `out/` to the `gh-pages` branch |

## Configuration

Company identity, services, FAQ content, policy date, emails, and form endpoints are centralized in:

```text
src/lib/company.ts
```

Update the placeholder phone number there before using telephone CTAs in production.

## Forms and SMS separation

The project intentionally keeps ordinary service requests separate from recurring text-message consent:

- Contact and support requests are delivered to `support@margaritoramirezllc.com`
- SMS consent and opt-out requests use the separate `sms@margaritoramirezllc.com` endpoint
- Contact forms do **not** enroll a visitor in recurring SMS
- The SMS checkbox is unchecked by default
- Consent is not a condition of purchase
- STOP and HELP instructions are disclosed

FormSubmit requires a one-time email activation for each destination address. A production messaging program should store verifiable consent and suppression records in a dedicated backend or messaging provider.

## GitHub Pages deployment

The application uses `output: 'export'`, trailing slashes, and a production `basePath` in `next.config.ts`.

```bash
npm run build
npm run deploy
```

The deployment command publishes the generated `out/` directory to the repository's `gh-pages` branch.

**Production URL:**
https://mafzalkalwardev.github.io/margarito-ramirez-llc-nextjs-website/

## Repository

| Resource | Link |
| --- | --- |
| GitHub repository | https://github.com/mafzalkalwardev/margarito-ramirez-llc-nextjs-website |
| Live website | https://mafzalkalwardev.github.io/margarito-ramirez-llc-nextjs-website/ |
| Product requirements | [docs/prd.md](docs/prd.md) |

## Legal note

Website policies are project content and are not a substitute for legal advice. The business should have counsel review privacy, SMS, service, and jurisdiction-specific requirements before launch.
