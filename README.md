# MP Sarkar — Unified Citizen App (prototype)

Static demo of a unified Madhya Pradesh citizen-services style UI: login flows, schemes, certificates, nagarpalika, complaints, land records, and related screens. **This is a front-end prototype only** — it does not connect to real government systems.

## Repository layout

| Path | Purpose |
|------|--------|
| `public/` | **Deploy this folder** — `index.html`, `assets/css/main.css`, `assets/js/main.js` |
| `archive/mp_gov_v3-monolith.html` | Earlier single-file version (kept for reference) |
| `.github/workflows/deploy-pages.yml` | Publishes `public/` to GitHub Pages on push |

## Publish on GitHub

1. Create a new repository on GitHub (empty, no README required if you already have this one).
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: MP Sarkar prototype with public site layout"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages (Actions)**  
   In the repo: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.

4. Push to `main` (or `master`). The workflow **Deploy to GitHub Pages** uploads the `public/` directory. After it finishes, open the **Pages** URL shown in the workflow run (typically `https://YOUR_USERNAME.github.io/YOUR_REPO/`).

### Optional: Pages from `/docs` instead

If you prefer not to use Actions, copy the contents of `public/` into a `docs/` folder at the repo root, commit, then set **Pages → Source** to branch `main` and folder **`/docs`**.

## Local preview

Open `public/index.html` in a browser, or serve the folder:

```bash
cd public && python3 -m http.server 8080
```

Then visit `http://127.0.0.1:8080`.

## Customizing Open Graph URL

After the site is live, add a canonical URL if you want better link previews, for example in `public/index.html` inside `<head>`:

```html
<link rel="canonical" href="https://YOUR_USERNAME.github.io/YOUR_REPO/">
<meta property="og:url" content="https://YOUR_USERNAME.github.io/YOUR_REPO/">
```
