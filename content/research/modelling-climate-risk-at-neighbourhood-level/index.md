---
title: "How Should We Model Climate Risk at the Neighbourhood Level?"
subtitle: "An initial design for decision units, data structures, and validation"
description: "A preliminary approach to local climate risk modelling, focusing on spatial units, risk mechanisms, data provenance, missing information, and validation limits."
date: 2026-08-20
draft: false
featured: false
type: "research"
slug: "modelling-climate-risk-at-neighbourhood-level"
categories: ["Research"]
fields: ["Artificial Intelligence", "Public Policy"]
areas: ["technology-governance", "public-policy"]
tags: ["risk-modelling", "spatial-data", "climate-adaptation", "data-governance", "model-validation"]
status: ["in-progress"]
questions:
  - how-can-climate-risk-models-preserve-local-knowledge
  - when-does-predictive-accuracy-improve-public-decisions
retrospective_notes: []
---

My interest in local climate adaptation has led to a question closer to my computer science background: where should we begin if we want a risk model useful to subdistrict staff?

My preliminary answer is not to begin by choosing an algorithm. We first need to define the decision being supported, determine the information it requires, and specify how the model's outputs will be checked.

This essay outlines a modelling approach, not a completed prediction study. The data structures and scenarios below are design examples and do not use real household information.

## Begin With a Bounded Problem

"Predict climate risk across an entire subdistrict" is too broad. Flooding, heat, and heating interruptions involve different mechanisms and require different data.

A more workable starting task might be to organise locations requiring priority checks for surface water flooding in a community, in the context of an existing official warning.

This differs from constructing a weather prediction model. Rather than forecasting rainfall again, it asks how existing weather information and local records can jointly support inspection arrangements. Its feasibility still depends on local data and institutional responsibilities.

## Match the Modelling Unit to the Action

If staff organise inspections by road segment but a model produces only administrative-area averages, its representation does not match the work. Treating every household as a separate unit could instead create unnecessary privacy and maintenance costs.

We should compare road segments, infrastructure sites, buildings, and grids, choosing a representation appropriate to the action. The finest available scale is not universally the best.

Nor should a database divided by administrative boundaries imply that risk stops at those boundaries. Upstream drainage and downstream road conditions may require linked examination.

## Derive Data Requirements From Risk Mechanisms

The IPCC describes climate risk through interactions among hazard, exposure, and vulnerability. This offers a conceptual basis for organising data, not a universal formula whose components can simply be multiplied everywhere. [Terminology](https://www.ipcc.ch/report/ar6/wg2/chapter/annex-ii/).

For the hypothetical task above, I would begin with the following information rather than adding everything available:

| Information category | Possible content | Essential question |
| --- | --- | --- |
| Weather context | Time and coverage of official warnings, observations, or forecasts | Does it apply to this place and task? |
| Physical conditions | Terrain, drainage, and underground entrances | Are records current, and is specialist verification needed? |
| Historical events | Flooded locations, event times, and field photographs | Which events may have gone unreported? |
| Operational conditions | Accessibility, available staff, and authority | Can the recommendation actually be implemented? |
| Local reports | Residents' and staff observations | Are sources, times, and review status clear? |

Information about personal needs should be processed only when necessary, appropriately authorised, and protected. A public example does not require names, telephone numbers, or precise home addresses.

## "Unknown" Must Be a Valid Data State

A missing database value cannot automatically mean no risk. A road without a flooding record may never have received a report, or the relevant record may never have entered this system.

I would want a local report to retain at least these fields:

```text
record_id       Record identifier
location_ref    Location or infrastructure identifier
observed_at     Observation time
source_type     Type of information source
observation     Original observation
review_status   Unverified, confirmed, disputed, or expired
reviewed_at     Most recent review time
```

These are proposed fields, not an existing database. Corrections should retain versions and reasons rather than silently overwrite earlier records.

<!-- Image space: an illustrative risk record using fictional locations. Preserve unknown and unverified states and exclude real household information. -->

## Compare Algorithms With Simple Baselines

If suitable data became available, I would first establish a transparent baseline, such as inspection priorities based on an existing list of known sites, before considering machine learning.

A complex model that outperforms random ranking but not existing practice has not demonstrated the value of its additional complexity. Simple rules are not automatically reliable either: omissions and inequitable effects still require examination.

Validation must account for time and space. Training and test observations drawn from adjacent locations in the same event may allow a model to memorise local patterns. Cross-event or cross-area tests should reflect the intended use, with explicit checks for information leakage.

## Prediction Validation Is Not Decision Validation

Recognising historical events does not demonstrate that a model improves the next inspection schedule. We would also need to examine missed sites, unnecessary inspections, and whether staff can understand and use its output.

Claims of reduced real-world losses require a design capable of distinguishing weather changes, infrastructure improvements, and other interventions. An offline test cannot directly establish policy impact.

This is worth pursuing because it connects computation and local governance through a task that can be investigated incrementally. The next step is to assess needs and data conditions, not to announce that an algorithm has already found the answer.

## Sources and Further Reading

- IPCC, 2022, AR6 Working Group II glossary, linked above.
- Scott, J. C., 1998, [introduction to Seeing Like a State](https://bpb-us-e1.wpmucdn.com/sites.tufts.edu/dist/a/5820/files/2020/09/Scott-Seeing-Intro.pdf), as background for thinking about representation and simplification.
- NIST, 2023, [AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).
