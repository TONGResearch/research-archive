# Writing System — 未竟札记

## Creating a New Entry

Use Hugo archetypes to generate correctly pre-filled front matter:

```bash
# Research note
hugo new research/2026-06-topic-name.md

# Reading note
hugo new reading/2026-06-book-title.md

# Policy memo
hugo new policy/2026-06-policy-topic.md

# Reflection / thought
hugo new thoughts/2026-06-topic.md
```

Each archetype pre-fills the correct front matter fields.

---

## File Naming Convention

```
YYYY-MM-DD-slug-with-hyphens.md
```

Example: `2026-06-03-capital-vol1-reading-note.md`

---

## Front Matter Reference

### Research note

```yaml
---
title: "Title"
subtitle: "Optional subtitle"
date: 2026-06-03
categories: ["Research"]
fields: ["Artificial Intelligence", "Governance"]
tags: ["AI Governance", "State Capacity"]
status: ["in-progress"]
---
```

### Reading note

```yaml
---
title: "Reading: Capital Vol. I (Marx)"
subtitle: "Labour, Value, and the Limits of the Classical Framework"
date: 2026-06-03
categories: ["Reading"]
fields: ["Marxism", "Political Economy"]
tags: ["Marxism", "Political Economy", "Labour Studies"]
status: ["reading"]
book:
  title: "Capital: A Critique of Political Economy, Vol. I"
  author: "Karl Marx"
  year: "1867"
  publisher: "Penguin Classics"
  rating: ""
---
```

### Policy memo

```yaml
---
title: "Policy Memo: AI Governance Frameworks"
subtitle: "A comparative analysis"
date: 2026-06-03
categories: ["Policy"]
fields: ["Artificial Intelligence", "Governance", "Public Policy"]
tags: ["AI Governance", "AI Regulation", "Comparative Governance"]
status: ["draft"]
scope: "Comparative"
---
```

### Thought / reflection

```yaml
---
title: "On the limits of technical solutions to political problems"
subtitle: ""
date: 2026-06-03
categories: ["Thoughts"]
fields: ["Governance", "Technology Studies"]
tags: ["AI", "Governance", "Technology"]
status: ["draft"]
---
```

---

## Research Article Template

A reusable template structure is available at:

```
content/research/templates/research-template.md
```

Copy and rename it before writing. Do not edit the template file directly.

---

## Enabling MathJax

For entries with mathematical notation, add to front matter:

```yaml
math: true
```

---

## Taxonomy Reference

See `docs/TAXONOMY.md` for the complete list of valid categories, fields, tags, and status values.
