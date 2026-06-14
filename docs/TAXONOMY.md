# Taxonomy System — 未竟札记 · Unfinished Notes

Hugo taxonomies configured in `hugo.yaml`:

```yaml
taxonomies:
  tag: tags
  field: fields
  area: areas
  status: status
```

All taxonomy terms automatically generate browsable archive pages at `/tags/`, `/fields/`, `/areas/`, `/status/`.

---

## Areas

Use `areas` to tag the research area an entry belongs to. Drives the Research Areas grid on the homepage and `/areas/` browse pages.

| Value | Notes |
|---|---|
| `technology-governance` | |
| `public-policy` | |
| `political-economy` | |
| `sociology` | |
| `psychology` | |
| `economics` | |
| `finance` | |
| `marxism` | |

---

## Fields

Use `fields` to tag the academic discipline.

| Value |
|---|
| `Artificial Intelligence` |
| `Governance` |
| `Public Policy` |
| `Political Science` |
| `Sociology` |
| `Marxism` |
| `Political Economy` |
| `Technology Studies` |
| `China Studies` |
| `Computational Social Science` |

---

## Core Tags

General-purpose tags usable across all sections.

```
AI, Governance, Digital Governance, Public Policy, Political Science,
Sociology, Marxism, Political Economy, Technology, Data, Law, Economics,
Philosophy, History, Education, Environment, China Studies,
International Relations, Computational Social Science, Research Methods
```

---

## Research Tags

More specific tags for research and policy entries.

```
AI Governance, Algorithmic Governance, Digital Government,
Platform Economy, Digital Capitalism, Political Economy of Technology,
State Capacity, Public Administration, Smart Cities, Data Governance,
Cyber Governance, Technology Policy, Innovation Policy,
Science and Technology Policy, Industrial Policy, Social Governance,
Social Transformation, Future of Work, Labour Studies, Platform Labour,
Automation, Human-AI Interaction, AI Ethics, AI Regulation,
Digital Society, Information Society, Governance Theory,
Institutional Design, Policy Design, Policy Evaluation, Policy Analysis,
Comparative Politics, Comparative Governance, Development Studies,
Urban Governance, Rural Governance
```

---

## Status Values

| Value | Meaning |
|---|---|
| `draft` | Working draft, not finalized |
| `in-progress` | Actively being developed |
| `active` | Ongoing research or reading |
| `reading` | Currently reading |
| `complete` | Finished |

---

## Question Relationships

Question Hubs use a stable `question_id`. Entries connect to Question Hubs through:

```yaml
questions: ["question-slug"]
```

Question lifecycle values are separate from article status values:

| Value | Meaning |
|---|---|
| `open` | Ongoing question |
| `partial` | Partially answered, still active |
| `closed` | Research objective substantially complete |

Use `featured_question: true` to place a Question Hub in Featured Questions.

---

## Example Front Matter

```yaml
---
title: "[Research Entry Title]"
subtitle: "Optional subtitle"
date: 2026-06-03
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

```yaml
---
title: "[Reading Entry Title]"
subtitle: "Optional subtitle"
date: 2026-06-03
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
  publisher: "Publisher"
  rating: ""
---
```

```yaml
---
title: "[Policy Entry Title]"
subtitle: "Optional subtitle"
date: 2026-06-03
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
