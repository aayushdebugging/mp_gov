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

3. **Turn on Pages for Actions (required before deploy succeeds)**  
   In the GitHub repo: **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”). Save if prompted.  
   Until this is set, GitHub has no Pages site record; workflows that call the Pages API can fail with **“Get Pages site failed” / Not Found**.

4. Run the workflow: push to `main` (or `master`), or open **Actions → Deploy to GitHub Pages → Run workflow**. When it succeeds, the live URL is in the job summary (often `https://YOUR_USERNAME.github.io/YOUR_REPO/`).

### If you already saw “Get Pages site failed”

Complete step 3 above, then in **Actions** open the failed run and click **Re-run all jobs**, or use **Run workflow** on **Deploy to GitHub Pages**.

The optional `enablement` input on `configure-pages` only works with a **personal access token** stored as a secret—not with the default `GITHUB_TOKEN`—so this repo’s workflow does not use that step; enabling Pages once in Settings is the intended path.

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
