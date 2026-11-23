---
title: "Does Better Prediction Mean Better Decisions?"
subtitle: "A hypothetical example separating model scores, action outcomes, and public goals"
description: "Why accuracy, missed events, false alarms, calibration, and resource constraints need distinct evaluation in public decision-making."
date: 2026-08-20
draft: false
featured: false
type: "research"
slug: "does-better-prediction-mean-better-decisions"
categories: ["Research"]
fields: ["Artificial Intelligence", "Public Policy"]
areas: ["technology-governance", "public-policy"]
tags: ["machine-learning", "model-evaluation", "decision-support", "calibration", "public-decision-making"]
status: ["in-progress"]
questions:
  - when-does-predictive-accuracy-improve-public-decisions
  - how-should-local-climate-adaptation-decision-support-systems-be-evaluated
  - can-ai-improve-public-decision-making-or-only-make-decisions-appear-more-scientific
retrospective_notes: []
---

Machine learning models are often compared through test-set metrics. That is necessary technical work. Once a model enters public decision-making, however, another question follows: what action does it actually change?

While developing ideas for local adaptation research, I began to see the need for an explicit connection between "more accurate" and "more useful". Otherwise, we may demonstrate that a model performs well on a test without establishing that it can support a real decision.

## A Hypothetical Example We Can Check

Suppose we assess 100 locations. In a fixed test scenario, 10 experience an event requiring attention and 90 do not. The labels are assumed to be known for the illustration. They are not observations from a real risk survey, and the example does not model how intervention might change outcomes.

Model A predicts no event at every location. It gets 90 cases right and has 90% accuracy.

Model B identifies 8 of the 10 actual events, but also produces false alarms at 13 locations without an event.

| Test outcome | Model A | Model B |
| --- | ---: | ---: |
| Actual events identified | 0 | 8 |
| Actual events missed | 10 | 2 |
| False alarms | 0 | 13 |
| Non-event locations correctly identified | 90 | 77 |
| Overall accuracy | 90% | 85% |

Model B has lower overall accuracy while identifying more actual events. This does not prove it should be deployed: false alarms also consume resources. It demonstrates that **overall accuracy does not fully express the trade-offs in this task**.

## Error Costs Depend on the Decision

A false alarm triggering a low-cost inspection creates a different burden from one directly triggering an expensive operation. The consequences of missing an event also vary by location and affected population.

Evaluation must therefore describe not only the number of errors but where they occur, their possible consequences, and opportunities for remedy.

There is no universal answer that a model can supply automatically. Some error costs can be estimated empirically. Others involve public goals and responsibility, requiring justified judgments by authorised institutions.

## Limited Resources Change How a Model Can Be Used

In the example, Model B flags 21 locations. If staff can inspect only some of them, binary labels do not yet amount to a work schedule.

Further questions concern ranking, independent evidence, outdated information, and differences in the consequences of omission. Even predicted probabilities should not automatically determine action priorities. Whether a measure can reduce a risk, and at what cost, also matters.

The decision rule is therefore a distinct layer that must be designed beyond the model itself.

## Precise-Looking Probabilities May Not Be Calibrated

If a system assigns "80%" to many cases, do events occur in approximately 80% of those cases under comparable evaluation conditions? That is a calibration question.

Guo and colleagues' research introduced a technical direction I want to understand better. A model's confidence information needs testing; displaying decimals does not establish that uncertainty has been represented reliably. [Original paper](https://proceedings.mlr.press/v70/guo17a.html).

Even good calibration on one test set does not establish that performance will persist across locations or new events. Changes in the operating environment still need examination.

## Prediction and Intervention Are Different Problems

Knowing where losses may occur differs from knowing how much a particular measure will reduce those losses.

A model can identify high-risk cases without estimating an intervention's effects on them. Resource allocation based on predictive scores still requires an explanation of why the proposed action is appropriate and whether alternatives might help more.

Kleinberg and colleagues' work on prediction policy problems provides a useful starting point for distinguishing prediction tasks from causal questions. It does not imply that every policy problem can be reduced to prediction. [Paper page](https://pubs.aeaweb.org/doi/10.1257/aer.p20151023).

<!-- Image space: confusion matrices drawn from the hypothetical example. Label them as illustrative data, not actual model evaluation results. -->

## How I Would Evaluate a Public Decision Model

My current preference is to examine three questions separately: whether the predictions are credible, whether the decision rule is justified, and whether implementation produces the expected effects.

The questions are related but not interchangeable. Improved accuracy may be valuable without establishing improved public outcomes if no action changes. Apparently better outcomes may also reflect other causes.

For future work, I would begin with small, reproducible examples and simulations to establish these distinctions before moving to real data and an evaluation design. That would make clearer what I had demonstrated and what remained unproven.

## Sources and Further Reading

- Guo, C., Pleiss, G., Sun, Y., and Weinberger, K. Q., 2017, *On Calibration of Modern Neural Networks*, linked above.
- Kleinberg, J., Ludwig, J., Mullainathan, S., and Obermeyer, Z., 2015, *Prediction Policy Problems*, linked above.

*All numerical results in this essay come from a constructed hypothetical example. They do not report the training or testing of an actual climate risk model.*
