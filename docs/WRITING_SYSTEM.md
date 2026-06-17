# Writing System — 未竟札记 · Unfinished Notes

## Creating a New Entry

Use Hugo archetypes to generate pre-filled front matter:

```bash
# Research note
hugo new content research/YYYY-MM-DD-slug/index.md

# Reading note
hugo new content reading/YYYY-MM-DD-slug/index.md

# Policy memo
hugo new content policy/YYYY-MM-DD-slug/index.md

# Reflection
hugo new content thoughts/YYYY-MM-DD-slug/index.md
```

Each archetype pre-fills the correct front matter fields for that section.

---

## Page Bundle Convention

```
content/research/YYYY-MM-DD-slug-with-hyphens/
├── index.md
├── index.zh.md
├── figure-1.png
├── table-1.png
└── diagram.png
```

Use one folder per entry. Put article images, diagrams, tables, and other local assets in the same folder as the article.

English article:

```txt
index.md
```

Chinese article:

```txt
index.zh.md
```

If both files exist in the same folder, Hugo treats them as translations of the same article and the site displays a language switcher.

---

## Creating English and Chinese Versions

Create the English version first:

```bash
hugo new content research/YYYY-MM-DD-slug/index.md
```

Create the Chinese version in the same folder:

```bash
hugo new content research/YYYY-MM-DD-slug/index.zh.md
```

The same pattern works for `reading/`, `policy/`, `thoughts/`, and `projects/`.

---

## Adding Images

Place images next to the article:

```txt
content/research/YYYY-MM-DD-slug/
├── index.md
└── figure-1.png
```

Reference the image from Markdown:

```md
![Figure 1](figure-1.png)
```

Use the same image path in `index.md` and `index.zh.md` when both language versions share the same figure.

---

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
questions: []
retrospective_notes: []
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
questions: []
retrospective_notes: []
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
questions: []
retrospective_notes: []
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
questions: []
retrospective_notes: []
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

## Creating a Research Question Hub

Create a question page with the dedicated archetype:

```bash
hugo new content --kind questions research/questions/question-slug/index.md
```

Question front matter:

```yaml
question_id: "question-slug"
featured_question: false
question_status: "open"
areas: []
question_description: ""
scope: ""
objectives: ""
current_position: ""
position_updated:
```

Valid `question_status` values:

- `open`
- `partial`
- `closed`

Set `featured_question: true` only for questions that should appear in Featured Questions.

To associate an article or project with one or more Question Hubs:

```yaml
questions: ["question-slug"]
```

The Question Hub automatically collects associated Reading Notes, Research Notes, Policy Notes, Reflections, and Projects.

---

## Retrospective Notes

Preserve the original article and append later reflections through front matter:

```yaml
retrospective_notes:
  - date: YYYY-MM-DD
    content: ""
```

Additional notes can be appended as further dated list items. They are rendered separately from the original article.

---

## Enabling MathJax

Add to front matter for LaTeX rendering:

```yaml
math: true
```

---

## Reference

See `docs/TAXONOMY.md` for the complete list of valid fields, areas, tags, and status values.
See `docs/GITHUB_PAGES.md` for deployment instructions.
