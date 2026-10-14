# Rosie's Heroes

Website for Rosie's Heroes — a 501c3 nonprofit reducing suffering at scale through spay/neuter and on-the-ground care for Indian street dogs.

**Live site:** [rosiesheroes.org](https://rosiesheroes.org)  
**Staging site:** [staging.rosiesheroes.org](https://staging.rosiesheroes.org)

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- Vanilla JS — scroll reveal, parallax animations
- GitHub Pages — hosting with custom domain

## Development & Deployment Workflow

All code and changes happen in this repository (`1919kiran/rosiesheroes`).

### 1. Making Changes
1. Create a new branch from `main`:
   ```bash
   git checkout main
   git pull
   git checkout -b my-change
   ```
2. Run locally to preview your changes:
   ```bash
   cd astro
   npm install
   npm run dev        # http://localhost:4321
   npm run build      # outputs static build to astro/dist/
   ```
3. Open a Pull Request into `main` and merge once reviewed.

### 2. Automatic Staging Deployment (`staging.rosiesheroes.org`)
- Every merge or push to `main` automatically builds and deploys to **[staging.rosiesheroes.org](https://staging.rosiesheroes.org)** via GitHub Actions (`.github/workflows/deploy.yml`).
- The live production website (`rosiesheroes.org`) is **not** modified when changes land on `main`.

### 3. Promoting to the Live Website (`rosiesheroes.org`)
Once changes have been verified on `staging.rosiesheroes.org`:
1. Go to **[Actions → Deploy Website](https://github.com/1919kiran/rosiesheroes/actions/workflows/deploy.yml)**.
2. Click **Run workflow** on the right.
3. Under **Deployment target**, select **`live`**.
4. Click **Run workflow** to publish `main` to **[rosiesheroes.org](https://rosiesheroes.org)**.

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

