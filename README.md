# Muhammad Zia Un Nabi Janjua — developer portfolio

A single-page React portfolio with a bold, colorful, personal feel:
a photo-led hero, a "badge wall" celebrating your real achievements
and certifications, color-blocked project cards, and a floating
pill navigation bar.

## ⚠️ Before you publish — check this first

Some of the content was filled in from public profile info and is
marked `// VERIFY` in `src/data/portfolioData.js`. Please double-check:

- Your **current job title / current role** (not included by default — add it)
- The **exact wording** of your Azure certification
- **Education dates** (years attended/graduated)
- Your **email address** — currently a placeholder
- The **ChatbotShield** project link (add the real GitHub URL)

## 1. Edit your content

Open `src/data/portfolioData.js`. Every piece of text on the site —
your name, bio, skills, projects, education, blog posts, social
links — lives in this one file. Change it there; you don't need to
touch any component.

## 2. Add your photos

Drop image files into `public/images/` using these exact names (or
rename them in `portfolioData.js` under `gallery`):

```
public/images/profile.jpg
public/images/speaking.jpg
public/images/hackathon.jpg
public/images/team.jpg
```

Until you add a file, that slot shows a placeholder box — nothing
breaks.

## 3. Run it locally

```bash
npm install
npm run dev
```

Open the printed localhost URL.

## 4. Deploy to GitHub Pages

You have two options. **Option A (recommended)** auto-deploys on every
push and is already set up in `.github/workflows/deploy.yml`.

### Option A — GitHub Actions (automatic)

1. Push this project to a GitHub repo.
2. In the repo: **Settings → Pages → Build and deployment → Source**,
   select **GitHub Actions**.
3. Push to `main` — the included workflow builds and deploys
   automatically. Your site will be live at the URL shown in
   **Settings → Pages**.

### Option B — `gh-pages` package (manual)

```bash
npm run deploy
```
This builds the site and pushes `dist/` to a `gh-pages` branch.
In **Settings → Pages**, set the source branch to `gh-pages`.

### Important: the `base` path

Open `vite.config.js`:

- If your repo is named `iamrlz.github.io` (a **user site**), leave
  `base: '/'`.
- If it's a regular repo name like `portfolio` (a **project site**),
  GitHub serves it at `/portfolio/`, so change it to:
  ```js
  base: '/portfolio/'
  ```
  (swap in your actual repo name)

If you skip this on a project site, your CSS/JS will 404 on the live
site even though it works locally.

## Project structure

```
src/
  data/portfolioData.js   ← all editable content
  components/              ← one file per section
  useInView.js              ← scroll-reveal hook
  index.css                 ← design tokens + all styles
.github/workflows/deploy.yml ← auto-deploy on push
```

## Tech

React 18 + Vite. No UI library — all styling is custom CSS using
design tokens (CSS variables) defined at the top of `src/index.css`,
so re-theming colors/fonts means editing one place.
