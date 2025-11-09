
# GitHub Pages Deployment Guide

This project was prepared for GitHub Pages without changing the UI.

## What changed
- **Vite `base`** set to `./` in `vite.config.ts` for relative assets (works for any repo name).
- **`404.html`** added as a copy of `index.html` so deep links still load the SPA.
- **`.nojekyll`** added to skip Jekyll processing.
- **GitHub Actions** workflow added at `.github/workflows/deploy.yml` to build and publish to Pages.

## How to deploy
1. Create a new GitHub repo (e.g., `ai-portfolio`), push this project as the root of `main`.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. Push to `main`. The action will build (`npm ci && npm run build`) and publish the `dist/` folder.
4. Your site will appear at `https://<your-username>.github.io/<repo>/`.

> If you prefer the `/docs` method, run `npm run build` locally and copy `dist/*` into a `docs/` folder, then in Settings → Pages choose "Deploy from a branch" and select `/docs`. (Keep `base: './'` in `vite.config.ts`.)

## About the Gemini API key
- This project references `process.env.GEMINI_API_KEY` for the AI assistant. Any key baked at build time becomes **public** in the client bundle.
- If you still want it active, you can add a GitHub Actions secret `GEMINI_API_KEY` and create a `.env` during build:

  ```yaml
  - name: Create .env
    run: |
      echo "GEMINI_API_KEY=${ secrets.GEMINI_API_KEY }" > .env
  ```

  Place that step **before** the build step. **Use at your own risk.** Prefer server-side proxies if you need to keep keys private.

## Local dev
```bash
npm ci
npm run dev
```

## Build locally
```bash
npm run build
# output in dist/
```

