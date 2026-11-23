---
title: "Designing a Decision Support System for Local Climate Adaptation"
subtitle: "Begin with a small, verifiable task before building a general-purpose platform"
description: "An early system proposal addressing task boundaries, data flows, human authority, error handling, and evaluation for local climate adaptation."
date: 2026-08-20
draft: false
featured: false
type: "research"
slug: "designing-local-climate-adaptation-decision-support"
categories: ["Research"]
fields: ["Artificial Intelligence", "Public Policy"]
areas: ["technology-governance", "public-policy"]
tags: ["system-design", "decision-support", "climate-adaptation", "data-provenance", "human-ai-interaction", "system-evaluation"]
status: ["in-progress"]
questions:
  - how-should-local-climate-adaptation-decision-support-systems-be-evaluated
  - how-can-climate-risk-models-preserve-local-knowledge
  - when-should-ai-assisted-decisions-require-human-intervention
  - who-can-revise-ai-objectives-that-conflict-with-local-public-interests
retrospective_notes: []
---

To develop my course reflections into a computing project, I would begin with a limited design: helping subdistrict staff organise local risks requiring verification, using existing official information as context.

This is an early system proposal. I have not built a product, connected it to a government system, or conducted a policy pilot. Its purpose is to turn research questions into requirements that can be discussed, implemented, and tested.

## Define What the System Does Not Do

The system would not independently issue disaster warnings, dispatch rescue services, replace specialist meteorological or hydrological models, or directly decide matters affecting residents' rights.

Its initial task could be to receive information authorised for use, produce a source-linked and correctable verification checklist, and record subsequent processing status.

The narrow scope is deliberate. If we cannot establish whether a report is outdated or who confirmed it, adding maps, chat, and automated recommendations will make errors harder to locate.

## Design Around a Record's Lifecycle

I would describe how information moves before listing interface features:

```text
Authorised information enters the system
    -> Preserve original content and provenance
    -> Check time, location, and missing fields
    -> Generate items requiring verification
    -> Staff review, supplement, or reject them
    -> An authorised person arranges actual work
    -> Record outcomes and corrections
```

A suggestion and an approved action must be distinct states. Human revisions need a history, and a generated summary must not replace the original information.

## A Minimal Record Structure

The following fictional record illustrates fields only. It does not describe an actual location or event.

```json
{
  "record_id": "example-001",
  "location_ref": "fictional-site-a",
  "source_type": "staff_report",
  "observed_at": "2026-01-01T10:00:00+08:00",
  "observation": "Demonstration: an unverified report of standing water near an entrance",
  "review_status": "unverified",
  "assigned_reviewer": null,
  "action_status": "not_authorised"
}
```

Here, `unverified` is not a data failure. It preserves a relevant fact: the information has not been confirmed. Entering a database does not make a report true.

An actual design would also require access controls, retention periods, and correction histories. If a task does not require personal identifiers, they should not be collected merely because they might be useful later.

## Where AI Might Fit

One possible use is to organise lengthy public notices into points staff can check, retaining a source for each point. Another is to identify missing times or locations in reports and request clarification rather than inventing details.

Structured output does not guarantee truth. Important fields should be checked through verifiable rules where possible. Generated content should not directly enter a confirmed state or receive authority to execute high-consequence operations.

External text should be treated as data to process, not instructions capable of changing permissions. The system should distinguish information input from operational authorisation and test invalid inputs, source confusion, and unauthorised requests.

A generative component is worth adding only if comparison with simpler methods without a language model supports its value.

## Express Authority Explicitly

| Role | Possible participation | Required limits |
| --- | --- | --- |
| Information provider | Submit observations, evidence, and corrections | Cannot turn a report into an approved instruction |
| Reviewer | Check sources, add field observations, flag conflicts | Does not automatically hold all decision rights |
| Authorised decision-maker | Arrange work within their responsibilities and explain reasons | Cannot silently erase significant corrections or objections |
| System maintainer | Repair software and maintain access controls and logs | Must not privately change public objectives through parameter adjustments |

This is a preliminary role model. Responsibilities must be established with the institution using the system, not assigned on its behalf by a developer.

<!-- Image space: a verification checklist or detail view from a future prototype. Do not present a concept image as a screenshot of a working system. -->

## Anticipate Failure and Interruption

When a data connection fails, the interface should display the last update time rather than present old data as live. Conflicting sources should keep the relevant recommendation awaiting review.

If no reviewer is available, a timeout must not automatically produce approval. The system should fall back to agreed arrangements, existing responsibilities, and plans, rather than inventing authority to act autonomously.

"Unable to provide a reliable recommendation" should be an acceptable output. Knowing when not to rely on an automated result is part of a public system's functionality.

## What Would Establish Its Value?

Initial offline tests could use synthetic or de-identified material to examine source correspondence, missing fields, traceability, and whether problematic records enter the correct states.

A later comparison could examine ordinary checklists, rule-based methods, and AI-assisted methods on the same task, considering omissions, processing time, error detection, and user burden. Without authorisation, experimental results must not influence actual responses.

Even good performance would support only particular technical and usability requirements. Claims of reduced losses or improved distribution would require a fuller real-world evaluation.

## What This Proposal Means for My Work

I see this as a starting point connecting research and development. A system need not be complex from the outset, but its states, permissions, and evaluation measures should have explicit reasons.

Computer science can help me implement those requirements. The governance perspective from the course reminds me to ask who defines them, who is missing, and how users and affected people can correct them.

## Sources and Further Reading

- NIST, 2023, [AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), as a reference for contextual risk management.
- NIST, [AI RMF Playbook: GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/), for examining roles and responsibilities.
- Bu et al., 2024, [comparative report on climate adaptation governance](https://napawash.org/news/adapting-to-the-impacts-of-climate-change-a-comparative-study-of-governance-processes-in-australia-china-and-the-united-states).
