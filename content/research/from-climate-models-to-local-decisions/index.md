---
title: "From Climate Models to Subdistrict Decisions: How Do Predictions Become Action?"
subtitle: "Distinguishing scenarios, risk information, and the decisions public institutions actually need to make"
description: "Examining scale, provenance, uncertainty, and authority between model outputs and local action, including an appropriate role for generative AI."
date: 2026-08-20
draft: false
featured: false
type: "research"
slug: "from-climate-models-to-local-decisions"
categories: ["Research"]
fields: ["Artificial Intelligence", "Public Policy"]
areas: ["technology-governance", "public-policy"]
tags: ["climate-adaptation", "climate-modelling", "decision-support", "data-provenance", "uncertainty"]
status: ["in-progress"]
questions:
  - when-does-predictive-accuracy-improve-public-decisions
  - how-should-local-climate-adaptation-decision-support-systems-be-evaluated
retrospective_notes: []
---

Suppose an analysis tells a local government that extreme rainfall risk may increase. What should happen next?

The statement means different things to a budget planner, a drainage officer, and someone organising field inspections. It may deserve attention without being sufficient to decide which location needs reinforcement or which road should be checked first.

While writing my local adaptation policy memo, I began to notice a series of translations between predictions and work arrangements that cannot simply be skipped.

## Identify the System Producing the Output

Although I use "predictions" as an everyday shorthand in this essay, careful analysis requires distinguishing information products.

Climate projections examine possible longer-term changes under specified assumptions. Weather forecasts concern weather conditions over shorter periods. Local impact models investigate how such conditions may affect particular environments.

Generative AI occupies a different position. It may help retrieve, summarise, or organise those materials, but a fluent answer is not itself a validated climate model. The accuracy of a summary and the applicability of the underlying model need separate examination.

In particular, including a subdistrict's name in a response does not establish that the analysis has subdistrict-level evidence.

## The Translations Between Information and Action

I currently understand this process as a chain of work requiring repeated verification:

```text
Define the decision and time horizon
    -> Check the sources and applicability of climate or weather information
    -> Assess impacts using local terrain, infrastructure, and population information
    -> Compare feasible measures and their constraints
    -> Have authorised people review, decide, and implement
    -> Record outcomes and revise information and procedures
```

This is an analytical structure, not a deployed system. An actual process must also fit local responsibilities and existing plans.

Defining the decision is particularly easy to overlook. Infrastructure investment over several decades and inspection arrangements during a weather event require different evidence and time horizons. The same generated paragraph cannot adequately perform both tasks.

## Text Cannot Automatically Create Spatial Precision

Regional research can inform local planning without identifying whether a particular underground entrance will flood.

Redrawing a coarse grid as a finer map, or asking a language model to add place names, does not create missing local information. Finer-scale judgments require an account of the additional data, methods, and validation supporting them.

From a computing perspective, I would want each important claim to retain its provenance: the original source, its geographical coverage, its time horizon, and any processing applied to it.

This gives users an opportunity to discover when an apparently specific conclusion is actually an extrapolation from a much larger scale.

<!-- Image space: a diagram distinguishing regional climate information, local impact analysis, and field verification. Do not add unvalidated risk estimates. -->

## Uncertainty Must Reach the Decision Interface

If an output retains only a risk category, users cannot readily distinguish a well-supported assessment from an estimate made with substantial missing information.

I would prefer a system to state which elements have direct evidence, which depend on assumptions, and which remain unknown. Conflicting sources should retain a review status rather than being automatically merged into more confident language.

This need not mean displaying every technical detail at once. A usable interface can show the main grounds and limitations first, with access to sources, applicable scenarios, and processing records.

Simplicity should not be achieved by hiding uncertainty that matters to the decision.

## Recommendations Need Resource and Authority Checks

Even a reliable impact assessment may produce recommendations outside the user's authority or dependent on unavailable staff and equipment.

An actionable recommendation should at least identify who handles it, which procedure applies, what resources are needed, when it must be referred elsewhere, and when it should be reviewed again.

AI may help organise these questions. Generating a complete checklist, however, does not establish feasibility. Confirmation still requires people familiar with local conditions and authorised to act.

## The Interfaces I Want to Study

As a computer science student, I am interested less in making a language model replace every other model and every member of staff than in designing reliable interfaces between these stages.

Can a recommendation be traced to its original evidence? Can "unknown" be stored as a valid state? After a field correction, will later recommendations continue to rely on superseded information?

These are more specific questions than how to generate a polished risk report. They also offer a more testable starting point for research.

## Sources and Further Reading

- IPCC, 2022, [AR6 Working Group II glossary](https://www.ipcc.ch/report/ar6/wg2/chapter/annex-ii/), for concepts including risk, scenarios, and adaptation.
- Bu et al., 2024, [comparative report on climate adaptation governance](https://napawash.org/news/adapting-to-the-impacts-of-climate-change-a-comparative-study-of-governance-processes-in-australia-china-and-the-united-states).
- NIST, 2023, [AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).

*This essay proposes an information workflow and system design approach. It contains neither validated location-specific climate predictions nor operational emergency instructions.*
