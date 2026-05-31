# Valora Systems Website

> AI Made Simple for Small Business — valorasystems.ai

---

## Project Structure

```
valora-systems/
├── public/
│   └── index.html        ← Main website (all-in-one)
├── vercel.json           ← Vercel deployment config
└── README.md             ← This file
```

---

## Before You Deploy — Complete These First

### 1. Formspree (Contact Form → your email)

1. Go to https://formspree.io and create a free account
2. Click **+ New Form**, name it "Valora Systems Contact"
3. Copy your **Form ID** (e.g. `xpwzqrjk`)
4. Open `public/index.html` and find:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual ID:
   ```
   action="https://formspree.io/f/xpwzqrjk"
   ```
6. In Formspree dashboard → Settings → set notification email to `brian@valorasystems.ai`

### 2. Cal.com (Scheduling Calendar)

1. Go to https://cal.com and create a free account
2. Your username will be something like `brian-valora` — note it down
3. Click **+ New Event Type**:
   - Title: "Free AI Orientation Call"
   - Duration: 30 minutes
   - Description: "A free 30-minute call to explore how AI can help your business."
   - Slug: `orientation`
4. Connect your Google Calendar or Outlook so bookings block your real calendar
5. Open `public/index.html` and find both instances of `YOUR_CAL_USERNAME`
6. Replace with your username, e.g. `brian-valora`

**To embed the calendar inline** (recommended — keeps users on your site):
- In `index.html`, find the `<!-- Cal.com embed -->` comment block
- Delete the `<div class="calendar-placeholder">...</div>` section
- Uncomment the `<iframe>` block by removing `<!--` and `-->`
- Your URL should look like: `https://cal.com/brian-valora/orientation?embed=true&theme=dark`

---

## Deploy to Vercel

### Option A — Drag & Drop (Easiest, ~2 minutes)

1. Go to https://vercel.com and sign up (free) with GitHub or email
2. Click **"Add New Project"**
3. Choose **"Deploy from template"** → skip → click **"Upload"** tab at top
4. Zip this entire `valora-systems/` folder
5. Drag the zip onto the upload area
6. Click **Deploy**
7. ✅ Live in ~30 seconds at a `*.vercel.app` URL

### Option B — GitHub + Vercel (Best for ongoing updates)

**Step 1: Push to GitHub**
1. Go to https://github.com → create a free account if needed
2. Click **"New Repository"** → name it `valora-systems` → Public → Create
3. Upload your files: drag the entire folder onto the GitHub page
   OR use terminal:
   ```bash
   cd valora-systems
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/valora-systems.git
   git push -u origin main
   ```

**Step 2: Connect to Vercel**
1. Go to https://vercel.com → "Add New Project"
2. Click **"Import Git Repository"**
3. Select your `valora-systems` repo
4. Vercel auto-detects `vercel.json` — no settings needed
5. Click **Deploy**
6. ✅ Every time you push to GitHub, your site auto-updates!

---

## Connect Your Custom Domain (valorasystems.ai)

1. In Vercel dashboard → click your project → **Settings → Domains**
2. Type `valorasystems.ai` → **Add**
3. Vercel shows you DNS records to add — two options:

**If your domain is on GoDaddy / Namecheap / Google Domains:**
- Log into your registrar
- Go to DNS settings
- Add an **A Record**: `@` → `76.76.21.21`
- Add a **CNAME Record**: `www` → `cname.vercel-dns.com`
- Wait 10–60 minutes for DNS to propagate

4. Back in Vercel — click **Verify** — it turns green ✅
5. Vercel automatically provisions a free **SSL certificate** (https://)

---

## Making Updates Later

All website content is in `public/index.html`. It's one file — easy to edit.

**Common edits:**
- Change text → find and edit directly in the HTML
- Add a new service card → copy one `<div class="service-card">` block and edit
- Update contact info → search for the text you want to change
- New colors → edit the CSS variables at the top inside `:root { ... }`

If using GitHub + Vercel: edit the file → save → git commit & push → site updates automatically in ~20 seconds.

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Formspree Docs: https://help.formspree.io
- Cal.com Docs: https://cal.com/docs
- Email: brian@valorasystems.ai
