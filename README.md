# 未竟札记 · Unfinished Notes

A long-term public research archive documenting intellectual development, reading history, research progress, policy thinking, and evolving understanding of AI, governance, political economy, sociology, public policy, and social transformation.

**Live site:** https://tongresearch.github.io/research-archive/  
**Repository:** https://github.com/TONGResearch/research-archive

---

## What this is

This site functions as four overlapping archives:

- **Research Archive** — research notes, progress logs, working papers
- **Reading Archive** — book reviews, literature notes, theory reading routes
- **Policy Archive** — policy memos, governance proposals, regulatory analysis
- **Intellectual Development Log** — reflections, open questions, stage-by-stage self-accounting

---

## Quick Start (local preview)

```bash
# Prerequisites: Hugo Extended v0.161.1
# Download: https://github.com/gohugoio/hugo/releases/tag/v0.161.1

cd /path/to/hugo-blog
hugo server
# Open: http://localhost:1313/research-archive/
```

## Writing a new entry

```bash
# Research note
hugo new research/YYYY-MM-DD-topic.md

# Reading note
hugo new reading/YYYY-MM-DD-book-title.md

# Policy memo
hugo new policy/YYYY-MM-DD-topic.md

# Reflection
hugo new thoughts/YYYY-MM-DD-topic.md
```

See `docs/WRITING_SYSTEM.md` for front matter reference.

## Deploying

Push to `main`. GitHub Actions builds and deploys automatically.

```bash
git add .
git commit -m "add: [description]"
git push
```

See `docs/GITHUB_PAGES.md` for first-time setup.

---

## Stack

- **Generator:** Hugo Extended v0.161.1
- **Theme:** None (custom layouts)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions
- **CSS:** Hugo Pipes (no build tool needed)
- **Search:** Client-side JSON index
