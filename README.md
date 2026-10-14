# Rosie's Heroes

Website for Rosie's Heroes — a 501c3 nonprofit reducing suffering at scale through spay/neuter and on-the-ground care for Indian street dogs.

**Live site:** [rosiesheroes.org](https://rosiesheroes.org)  
**Staging site:** [staging.rosiesheroes.org](https://staging.rosiesheroes.org)

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- Vanilla JS — scroll reveal, parallax animations
- GitHub Pages — hosting with custom domain

## Development

```bash
cd astro
npm install
npm run dev        # localhost:4321
npm run build      # outputs to dist/
```

## Deployment

Pushes to `main` automatically build and deploy to the staging site via GitHub Actions (`.github/workflows/deploy.yml`).

To deploy the hardened version to production, run the workflow manually from GitHub Actions and choose `live` as the deployment target. The default manual target is `staging`.

## Project Structure

```
astro/
  src/
    components/
      layout/       # Nav, Footer
      sections/     # Hero, Vision, Roadmap, Adopt, Volunteer, Donate, etc.
      ui/           # WaveDivider, BrokenToBrave
    layouts/        # BaseLayout
    pages/          # index.astro
    styles/         # tokens.css, global.css, fonts.css
  public/
    images/         # Photos, illustrations, logo
    scripts/        # main.js (scroll reveal, parallax)
```

## License

All rights reserved. Rosie's Heroes, 2026.

