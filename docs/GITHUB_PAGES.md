# GitHub Pages Deployment Guide

## Repository

```
https://github.com/TONGResearch/research-archive
```

## One-Time Setup (do this once)

### Step 1 — Configure Git identity (on your Mac)

```bash
git config --global user.name "Jiatong"
git config --global user.email "your@email.com"
```

### Step 2 — Initialize and connect

```bash
cd /path/to/hugo-blog
git init
git remote add origin https://github.com/TONGResearch/research-archive.git
git branch -M main
```

### Step 3 — First commit and push

```bash
git add .
git commit -m "initial: complete site scaffold"
git push -u origin main
```

### Step 4 — Enable GitHub Pages in repository settings

1. Go to: `https://github.com/TONGResearch/research-archive/settings/pages`
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Save

GitHub Actions will automatically build and deploy on every push to `main`.

---

## Ongoing Workflow

Every time you write a new article:

```bash
# Create new article
hugo new research/2026-06-my-topic.md

# Write the article in VS Code, then:
git add .
git commit -m "add: research note on [topic]"
git push
```

GitHub Actions runs automatically. The site updates within ~60 seconds.

---

## Local Preview

```bash
# From your hugo-blog directory
/private/tmp/hugo-0.161.1-expanded/Payload/hugo server
```

Then open: `http://localhost:1313/research-archive/`

---

## Final URL

```
https://tongresearch.github.io/research-archive/
```
