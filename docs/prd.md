# PRD: Margarito Ramirez IT Solutions Website

## 1. Product Overview
MARGARITO RAMIREZ LLC needs a premium, conversion-focused website for **Margarito Ramirez IT Solutions**, its IT-support service brand. The site presents managed IT, cybersecurity support, and remote helpdesk assistance for small businesses, professional offices, and remote professionals — not trucking or dispatch.

## 2. Primary Goals
- Generate qualified IT support inquiries.
- Build trust through clear scope, plain language, and no invented promises.
- Separate general contact from Customer Care SMS enrollment (TCPA-friendly).
- Make it easy to request support via form or email.

## 3. Target Audience
- Small and medium-sized businesses
- Local professional offices
- Independent remote professionals and distributed teams

## 4. Brand Direction
- Calm, professional IT-support feel (deep slate + teal accent)
- Brand-first hero; full-bleed technology/support imagery
- Clear communication; no MSP hype or fake stats
- Distinguish legal entity vs service brand on About, footer, and legal pages

## 5. Core Pages
- Home
- About
- Services
- Contact
- Support request
- Service Area
- SMS Consent (+ opt-out)
- FAQ
- Privacy Policy
- Terms and Conditions
- SMS Terms

## 6. Core Sections on Home
- Hero with brand, headline, CTAs
- Trust / company strip (legal name, entity #, hours, region)
- Services teaser and capabilities
- Value + Connect → Diagnose → Resolve
- Core services detail
- Security & support pillars
- Request → Confirm → Assess → Coordinate → Support
- SMS education block
- Service area teaser
- FAQ
- Final CTA

## 7. Functional Requirements
- Shared sticky header and footer on all pages
- Contact form via FormSubmit to support@ (does not enroll SMS)
- SMS consent/opt-out via separate FormSubmit endpoint to sms@
- FAQ accordion
- Floating email / request CTAs on home
- Back to top
- Responsive and accessible interface
- SEO metadata and Organization / ProfessionalService JSON-LD
- Centralized company configuration in `src/lib/company.ts`
- Static export for GitHub Pages

## 8. Content Requirements
- Concise, confident IT support copy
- No fake stats, invented testimonials, or freight/dispatch language
- Full Privacy, Terms, and SMS Terms with SMS privacy clauses

## 9. Technical Requirements
- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- FormSubmit for static form delivery

## 10. Success Metrics
- Increased inbound support inquiries
- Clear SMS consent separation
- Strong page speed and mobile usability
- Trust signals: entity details, hours, clear scope
