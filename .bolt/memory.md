# Project memory

## Product intent & audience

- Personal developer portfolio site recreating Harsha's portfolio (harsha-pro.vercel.app).
- Single-page React app showcasing hero intro, about, projects, skills, work experience, and contact.
- Audience: potential employers, clients, and visitors viewing a developer's portfolio.

## Brand personality & voice

- Modern, professional developer portfolio with a polished dark-theme aesthetic.
- Production-worthy presentation; not generic or cookie-cutter.

## Visual design & UX direction

- Dark theme throughout.
- Single-page scroll with sections: hero, about (core stack + hobbies), projects (11), skills (by category), experience (3 roles), contact.
- Sticky navbar that highlights the active section during scroll.
- Smooth scroll-reveal animations; animated status badge.
- Project cards use designed gradient backgrounds with relevant Lucide icons (no screenshots available from source).
- Subtle glowing background orbs for atmosphere.
- Fully responsive across mobile and desktop.
- Icons from lucide-react; `Cricket` icon does not exist — `Trophy` used as substitute.

## Decisions, constraints & rationale

- Stack: Vite + React, Tailwind CSS, lucide-react. No extra UI/icon/theme packages.
- `@/` path alias maps to `src/` (configured in vite.config).
- Removed `optimizeDeps.exclude` for lucide-react from Vite config — it is a normal ESM dep and pre-bundling works fine.
- Pexels was unavailable at build time, so gradient placeholder cards used for project images instead of photos.
- Original site's project screenshots were locked to that deployment and could not be reused, so each project represented by gradient card + icon.
- Real screenshots can be wired in later by dropping image files into the project.

## Open questions & assumptions

- Whether the user wants real project screenshots added (currently gradient placeholders).
- Whether the recreation matches the original closely enough or needs further refinement.
- Source for project screenshots if user requests real images.
- `.bolt/prompt` contains authoritative global instructions (beautiful/production designs, Tailwind/lucide-react stack, `@/` alias); not restated here.