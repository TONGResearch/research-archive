# Taxonomy System — 未竟札记

Hugo taxonomies are configured in `hugo.yaml`:

```yaml
taxonomies:
  category: categories
  tag: tags
  field: fields
  status: status
```

All taxonomy terms automatically generate browsable archive pages.

---

## Categories

Use `categories` to classify the type of writing.

| Value | Purpose |
|---|---|
| `Research` | Research notes, progress logs, working papers |
| `Reading` | Book reviews, literature notes, reading routes |
| `Thoughts` | Reflections, open questions, intellectual development |
| `Policy` | Policy memos, governance proposals, regulatory analysis |
| `Projects` | Project documentation, technical work |

---

## Fields

Use `fields` to tag the academic discipline or area of inquiry.

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

Use `status` to track the state of any entry.

| Value | Meaning |
|---|---|
| `draft` | Working draft, not finalized |
| `in-progress` | Actively being developed |
| `active` | Ongoing research or reading |
| `reading` | Currently reading |
| `complete` | Finished |

---

## Front Matter Fields

```yaml
---
title: ""
subtitle: ""
date:
categories: []
fields: []
tags: []
status: []
---
```
