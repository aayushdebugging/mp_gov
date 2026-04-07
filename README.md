# MP Sarkar — Unified Citizen App (prototype)

Static demo of a unified Madhya Pradesh citizen-services style UI: login flows, schemes, certificates, nagarpalika, complaints, land records, and related screens. **This is a front-end prototype only** — it does not connect to real government systems.

## Repository layout

| Path | Purpose |
|------|--------|
| `public/` | **Deploy this folder** — `index.html`, `assets/css/main.css`, `assets/js/main.js` |
| `archive/mp_gov_v3-monolith.html` | Earlier single-file version (kept for reference) |
| `.github/workflows/deploy-pages.yml` | Pushes `public/` to branch **`gh-pages`** for hosting |

## Publish on GitHub

This project deploys by pushing static files to the **`gh-pages`** branch (using [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)). You do **not** need Pages set to “GitHub Actions,” which avoids **“Get Pages site failed” / Not Found** from GitHub’s Actions-based Pages API.

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

3. Wait for **Actions → Deploy to GitHub Pages** to finish once (or run it manually). That creates the **`gh-pages`** branch.

4. **Settings → Pages → Build and deployment**  
   - **Source**: **Deploy from a branch**  
   - **Branch**: **`gh-pages`**  
   - **Folder**: **`/ (root)`**  
   Save. After a minute, the site is usually at `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

### If you still see “Get Pages site failed”

That message comes from GitHub’s **`configure-pages` / Actions Pages** flow. This repo’s workflow no longer uses that path. Confirm on GitHub that `.github/workflows/deploy-pages.yml` matches this repository (pull the latest `main`), and that you are not also running a different Pages workflow from the Actions templates.

### Optional: Pages from `/docs` on `main`

If you do not want a `gh-pages` branch, copy the contents of `public/` into a `docs/` folder at the repo root, commit, then set **Pages → Deploy from a branch** → **`main`** / **`/docs`**. You can remove or disable the workflow in that case.

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
