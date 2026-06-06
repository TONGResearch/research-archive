# Project Status — 未竟札记 · Unfinished Notes

**Repository:** https://github.com/TONGResearch/research-archive  
**Live site:** https://tongresearch.github.io/research-archive/  
**Hugo version:** Extended v0.161.1

---

## Current State

**Completion: ~85%**

All site structure, layouts, navigation, taxonomy, archive system, and deployment configuration are complete. No article content exists. The repository is ready for content to be written.

---

## What Is Implemented

- Custom Hugo layouts (no external theme)
- 6-item primary navigation with dropdowns (Home / Research / Reading / Policy / Archive / About)
- Section-level secondary navigation strips (Research: Overview · Featured · Areas · Tags · Timeline)
- Homepage: Featured Works → Research Areas → Recent Updates → Timeline snapshot
- Featured Works system (`featured: true` front matter pins entries)
- Timeline pages per section and full archive (`layouts/page/timeline.html`)
- Archive page with section tabs + year filter + tag cloud + combined filtering
- Research Areas taxonomy (`areas`) with 6 configured areas
- Tags taxonomy with auto-generated browse pages
- English-first bilingual UI throughout all fixed interface elements
- Oxford/LSE academic aesthetic (EB Garamond + Noto Serif SC + JetBrains Mono)
- Hugo Pipes CSS processing with fingerprinting
- JSON search index (all sections)
- RSS feed
- GitHub Actions workflow for GitHub Pages deployment
- `enableGitInfo: true` for last-updated metadata on articles

---

## Content Files (structure only — no articles)

| File | Purpose |
|---|---|
| `content/_index.md` | Homepage front matter |
| `content/about/_index.md` | About page |
| `content/about/research-agenda.md` | Research Agenda page |
| `content/archive.md` | Archive page router |
| `content/archive-timeline.md` | Full timeline page router |
| `content/research/_index.md` | Research section index |
| `content/research/featured.md` | Featured Works page router |
| `content/research/timeline.md` | Research timeline router |
| `content/reading/_index.md` | Reading section index |
| `content/reading/timeline.md` | Reading timeline router |
| `content/policy/_index.md` | Policy section index |
| `content/policy/timeline.md` | Policy timeline router |
| `content/thoughts/_index.md` | Reflections section index |
| `content/research/templates/research-template.md` | Writing template (`draft: true`) |

---

## Pending

1. Push to GitHub and activate Pages (one-time setup — see `docs/GITHUB_PAGES.md`)
2. Write first entries using archetypes
3. Add hero image to `static/assets/` if desired (optional)

---

## Next Action

```bash
git add -A
git commit -m "feat: complete site architecture"
git push
```

Then: GitHub → Settings → Pages → Source → GitHub Actions
