# Marketing Association New Zealand — Homepage

A fully responsive homepage built with **React JS + Vite** as part of Mission 0 at Mission Ready Level 5 (ADV Track).

## Live Preview

![Marketing Association NZ](https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80)

## What I Built

A professional news and resources homepage for Marketing Association New Zealand, featuring:

- **Sticky Navbar** — logo, nav links, Join Now & Login buttons, animated hamburger menu for mobile
- **Hero Section** — full-width banner, search bar, topic tag pills, live events badge with pulse animation
- **News Grid** — 6 article cards with category filter bar, colour-coded tags, hover animations, responsive 3→2→1 columns
- **Footer** — 4-column layout with newsletter sign-up, social links, quick links, and privacy/terms

## Tech Stack

| Tool | Purpose |
|------|---------|
| React JS | Component-based UI |
| Vite | Fast build tool & dev server |
| CSS Grid | Responsive card layout |
| CSS Flexbox | Navbar & footer layout |
| CSS Custom Properties | Consistent colour system |
| Google Fonts (Inter) | Modern typography |
| Git + GitHub | Version control |

## Project Structure

```
src/
  main.jsx
  App.jsx
  App.css              ← Global CSS variables
  index.css            ← Full-width reset
  components/
    Navbar.jsx + Navbar.css
    Hero.jsx   + Hero.css
    NewsGrid.jsx + NewsGrid.css
    Footer.jsx + Footer.css
```

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Key Features

- Mobile-first responsive design (breakpoints at 600px & 960px)
- Animated hamburger menu that transforms into an X
- Category filter bar to sort news articles
- Card hover effects — lift + image zoom
- Green pulse animation on Live Events badge
- Stats bar: 12,000+ members, 200+ events

## About

Built by **Ajit (Arkhajit Singh)** — Mission Ready Level 5, ADV Track, May 2026.
