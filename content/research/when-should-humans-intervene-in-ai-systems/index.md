---
title: "When Should Humans Intervene? From Human-in-the-Loop to Human-on-the-Loop"
subtitle: "Turning oversight into explicit authority, triggers, and workable review"
description: "Reflections on meaningful human oversight, drawing on local climate adaptation and a conceptual paper on agricultural agents."
date: 2026-08-20
draft: false
featured: false
type: "research"
slug: "when-should-humans-intervene-in-ai-systems"
categories: ["Research"]
fields: ["Artificial Intelligence", "Public Policy"]
areas: ["technology-governance", "public-policy"]
tags: ["human-in-the-loop", "human-on-the-loop", "human-ai-interaction", "agentic-ai", "accountability"]
status: ["in-progress"]
questions:
  - when-should-ai-assisted-decisions-require-human-intervention
  - who-can-revise-ai-objectives-that-conflict-with-local-public-interests
retrospective_notes: []
---

In my local climate adaptation paper, retaining human judgment was an important principle. I subsequently began to feel that writing "Human-in-the-Loop" did not yet answer the difficult questions.

Where does a person participate? What information can they see? What can they change? What happens if they do not have time to review the output?

Dr Azhar Iqbal at the University of Leeds shared with me a paper on agricultural agents by Carlos Parra-López and Carmen Carmona-Torres. Reading it made these questions more concrete and encouraged me to compare human-AI arrangements in agriculture and local adaptation.

## Two Terms, Different Arrangements

I use a working distinction here. Human-in-the-Loop emphasises direct participation at specified stages, such as reviewing or approving an output. Human-on-the-Loop emphasises a system operating within defined boundaries, with people supervising and intervening when necessary.

Usage differs across the literature. Describing actual permissions and procedures is more reliable than judging the adequacy of oversight from a label alone.

Some operations require individual approval; some low-risk tasks may not require confirmation every time. The appropriate arrangement depends on error consequences, reversibility, response time, and supervisory resources. These terms should not be placed on a universal ladder of progress.

## What the Agriculture Paper Contributed

*Agentic Agriculture 5.0* proposes cooperation between farm-level and regional agents, with Human-on-the-Loop arrangements that provide for supervision, escalation, and human veto. The authors address not only individual farm efficiency but coordination of resources and public objectives across scales. [Paper DOI](https://doi.org/10.1016/j.agsy.2026.104893).

Its level of evidence matters. This is a conceptual framework with an illustrative agent-based simulation, not proof that language-model agents have demonstrated governance benefits in actual farms.

The question most relevant to my work is whether system autonomy can be expressed through explicit authorisation boundaries rather than left for users to infer during each operation.

## Oversight Needs Explicit Triggers

For local decision support, I would begin by distinguishing the situations below. The table is a research proposal, not an operational standard for a deployed system.

| Situation | Possible arrangement to investigate | Important boundary |
| --- | --- | --- |
| Organising public information without personal data | Automate initial organisation, then check sources | Summaries can still be wrong |
| Producing a list of issues requiring verification | Let the system suggest items for staff review using field information | Suggestions must not automatically become instructions |
| Allocating important resources or affecting individual rights | Require review by an authorised person before action | Reasons and routes for challenge are needed |
| Conflicting sources, expired data, or conditions outside the intended use | Pause reliance on affected recommendations and escalate review | Silence must not count as consent |

The aim is not to maximise confirmation clicks. It is to place intervention where it can genuinely change an outcome.

## A Button Does Not Establish the Ability to Intervene

A reviewer who sees only the final recommendation, without sources or limitations, has little basis for a reasoned objection. A veto may also be nominal if work arrangements leave no practical opportunity to delay or change the process.

I would examine oversight through specific conditions: relevant knowledge, sufficient time, access to other information, authority to stop or modify the process, and what happens after an objection.

GOVERN 3.2 in NIST's AI RMF Playbook addresses roles and responsibilities in human-AI configurations and oversight. It offers an institutional reference point, not a universal intervention threshold for every setting. [Relevant section](https://airc.nist.gov/airmf-resources/playbook/govern/).

## Preserve Disagreement Between People and Systems

When staff repeatedly revise a category of recommendations, asking them to trust the system more may not be the most useful response. Inputs may be stale, objectives inappropriate, or a constraint missing from the representation.

I would want revisions and their reasons recorded, with periodic examination of disagreement patterns. Human corrections must not automatically become ground-truth training labels: people can also be mistaken or hold different information.

Such records should first support review and learning. Updating a model, revising operational rules, and changing public objectives require different authorisation processes.

<!-- Image space: a diagram of permissions and intervention points, distinguishing viewing, suggesting, approving, executing, and stopping. -->

## From Human Presence to Human Influence

This reading changed how I understand the principle of human participation in my paper. The issue is whether people can understand, question, and change system behaviour at important points, not whether a flowchart contains a human icon.

I would next like to examine these arrangements through scenario tests: which risks fail to trigger review, which alerts overwhelm reviewers, and whether staff can identify errors under the specified conditions. These remain proposed studies, not completed experiments.

## Sources and Further Reading

- Parra-López, C., and Carmona-Torres, C., 2026, *Agentic Agriculture 5.0*, Agricultural Systems, 238, 104893, DOI linked above.
- NIST, AI RMF Playbook, GOVERN 3.2, linked above. I use it to discuss roles and responsibilities, not as a legal requirement binding every setting.

*This essay combines reading notes with a research extension. It does not imply that the paper's authors or the colleague who shared it endorse the proposed local-governance application.*
