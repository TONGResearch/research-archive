# 未竟札记 · Unfinished Notes

A long-term public research archive for intellectual development, reading history, research progress, and policy thinking.

**Live site:** https://tongresearch.github.io/research-archive/  
**Repository:** https://github.com/TONGResearch/research-archive

---

## Structure

| Section | Purpose |
|---|---|
| Research | Research notes, working papers, methodology |
| Reading | Book reviews, literature notes, reading routes |
| Policy | Policy memos, governance proposals, regulatory analysis |
| Reflections | Open questions, intellectual development notes |

---

## Writing a new entry

```bash
hugo new research/YYYY-MM-DD-slug.md
hugo new reading/YYYY-MM-DD-slug.md
hugo new policy/YYYY-MM-DD-slug.md
hugo new thoughts/YYYY-MM-DD-slug.md
```

See `docs/WRITING_SYSTEM.md` for front matter reference.

## Local preview

```bash
# Requires Hugo Extended v0.161.1
hugo server
# → http://localhost:1313/research-archive/
```

## Deploy

```bash
git add .
git commit -m "add: description"
git push
# GitHub Actions builds and deploys automatically
```

See `docs/GITHUB_PAGES.md` for first-time setup.

---

## Stack

Hugo Extended · GitHub Pages · GitHub Actions · No external theme · Hugo Pipes CSS
