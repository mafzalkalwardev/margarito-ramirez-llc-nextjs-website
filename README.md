# Margarito Ramirez LLC — Truck Dispatch Website

A premium, conversion-focused website for Margarito Ramirez LLC, built to present the company as a trusted truck dispatch partner for owner-operators and small fleets.

## Overview

This project showcases a modern logistics brand experience with:

- premium visual design and responsive layout
- trust-focused messaging for carrier lead generation
- service pages for dispatch support and trucking operations
- SEO-friendly structure and polished content sections

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Hook Form + Zod

## Project Structure

- app/ — page routes and layout
- components/ — reusable UI blocks
- lib/ — company content and configuration

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site locally.

## Build and Deploy

```bash
npm install
npm run build
npm run deploy
```

This site is statically exported and published to GitHub Pages from the `gh-pages` branch.

## Live Site

https://mafzalkalwardev.github.io/margarito-ramirez-llc-nextjs-website/

## Notes

- The site uses a production-only `basePath` and `assetPrefix` so local development remains clean.
- The `gh-pages` deployment includes dotfiles and a `.nojekyll` file to preserve static Next.js output.
- A branded `logo.svg` is included as a shortcut icon in the site metadata.
