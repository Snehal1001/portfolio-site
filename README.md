# Snehal Prajapati — Portfolio

A clean, minimal personal portfolio built with React, Vite, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The static site is output to `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.

## Deploying (quick options)

- **Vercel**: `npx vercel` from this folder, or connect the GitHub repo in the Vercel dashboard (framework preset: Vite).
- **Netlify**: drag-and-drop the `dist/` folder after `npm run build`, or connect the repo (build command `npm run build`, publish directory `dist`).
- **GitHub Pages**: build, then push the contents of `dist/` to a `gh-pages` branch (e.g. with the `gh-pages` npm package).

## Editing content

Almost everything on the site — your summary, skills, experience, and project case studies — lives in one file:

```
src/data/content.js
```

Edit the values there and every section updates automatically. A few things worth doing before you publish:

- **`profile.linkedin` / `profile.github`** — currently placeholders, update with your real URLs.
- **`projects`** — the three case studies are drafted from your resume's bullet points. Rewrite the `problem` / `approach` / `impact` copy in your own words, or swap in personal projects.
- **Résumé download** — `public/Snehal-Prajapati-Resume.pdf` is served at the "Download résumé" button. Replace that file (keep the same name, or update `profile.resumeFile` in `content.js`) whenever your résumé changes.
- **Favicon** — `public/favicon.svg` is a placeholder; swap it for your own mark if you have one.

## Project structure

```
src/
  components/   One file per section (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer)
  data/         content.js — all your editable copy in one place
  hooks/        useReveal.js — small scroll-in-view animation hook
  index.css     Tailwind import + design tokens (colors, fonts) + a couple of small custom utilities
```

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
