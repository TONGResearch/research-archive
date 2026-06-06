# Writing System — 未竟札记 · Unfinished Notes

## Creating a New Entry

Use Hugo archetypes to generate pre-filled front matter:

```bash
# Research note
hugo new research/YYYY-MM-DD-slug.md

# Reading note
hugo new reading/YYYY-MM-DD-slug.md

# Policy memo
hugo new policy/YYYY-MM-DD-slug.md

# Reflection
hugo new thoughts/YYYY-MM-DD-slug.md
```

Each archetype pre-fills the correct front matter fields for that section.

---

## File Naming Convention

```
YYYY-MM-DD-slug-with-hyphens.md
```

---

## Front Matter Reference

### Research note

```yaml
---
title: "[Research Entry Title]"
subtitle: ""
date: YYYY-MM-DD
draft: false
featured: false
categories: ["Research"]
fields: ["Field Name"]
areas: ["area-slug"]
tags: ["Tag One", "Tag Two"]
status: ["in-progress"]
---
```

### Reading note

```yaml
---
title: "[Reading Entry Title]"
subtitle: ""
date: YYYY-MM-DD
draft: false
featured: false
categories: ["Reading"]
fields: ["Field Name"]
areas: ["area-slug"]
tags: ["Tag One"]
status: ["reading"]
book:
  title: "Book Title"
  author: "Author Name"
  year: "YYYY"
  publisher: "Publisher Name"
  rating: ""
---
```

### Policy memo

```yaml
---
title: "[Policy Entry Title]"
subtitle: ""
date: YYYY-MM-DD
draft: false
featured: false
categories: ["Policy"]
fields: ["Field Name"]
areas: ["area-slug"]
tags: ["Tag One", "Tag Two"]
status: ["draft"]
scope: "Comparative"
---
```

### Reflection

```yaml
---
title: "[Reflection Title]"
subtitle: ""
date: YYYY-MM-DD
draft: false
featured: false
categories: ["Thoughts"]
fields: ["Field Name"]
areas: []
tags: ["Tag One"]
status: ["draft"]
---
```

---

## Pinning to Featured Works

Add `featured: true` to any entry's front matter to pin it to the Featured Works page and the homepage Featured section. Featured entries appear independently of publication date.

---

## Tagging for Research Areas

Add one or more area slugs to the `areas` field to make an entry appear under that Research Area:

```yaml
areas: ["technology-governance", "political-economy"]
```

Valid area slugs: `technology-governance`, `public-policy`, `political-economy`, `sociology`, `psychology`, `economics`, `finance`, `marxism`.

---

## Enabling MathJax

Add to front matter for LaTeX rendering:

```yaml
math: true
```

---

## Writing Template

A reusable structural template is available at:

```
content/research/templates/research-template.md
```

Copy and rename before writing. Do not edit the template directly. It is marked `draft: true` and will never be published by Hugo.

---

## Reference

See `docs/TAXONOMY.md` for the complete list of valid fields, areas, tags, and status values.
See `docs/GITHUB_PAGES.md` for deployment instructions.
