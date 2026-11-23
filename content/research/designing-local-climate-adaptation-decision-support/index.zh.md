---
title: "如果为街道设计一个气候适应决策支持系统"
subtitle: "从一个可核验的小任务开始，而不是先搭建万能平台"
description: "提出一个尚未实现的地方气候适应决策支持系统构想，说明最小任务、数据流程、人工权限、错误处理与评价设计。"
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

如果把课程中的思考继续向计算机系统推进，我想先尝试一个范围有限的设计：帮助街道工作人员在既有官方信息基础上，整理需要核查的地方风险事项。

本文是一份早期系统构想，没有建成产品、接入真实政府系统，也没有开展实际政策试点。其用途是把研究问题转化为可以讨论、实现和测试的要求。

## 先明确系统不做什么

这个系统不独立发布灾害预警，不自行调度救援，不替代专业气象或水文模型，也不直接作出涉及居民权益的决定。

最初任务可以限定为：接收已授权使用的信息，为工作人员生成有来源、可修正的核查清单，并记录后续处理状态。

这是一个有意收缩的范围。如果连一条报告是否过期、由谁确认都无法说清，增加地图、聊天和自动推荐功能，只会使错误更难定位。

## 从一条记录的生命周期设计流程

我希望优先描述信息怎样流动，而不是先列功能页面。

```text
已授权的信息进入系统
    -> 保存原始内容与来源
    -> 检查时间、地点及缺失字段
    -> 生成待核查事项
    -> 工作人员复核、补充或驳回
    -> 由有权限者安排实际工作
    -> 记录处理结果与更正
```

系统中的“建议”与“已批准行动”应当是不同状态。人工修改需要保留历史，原始信息也不能被生成式摘要替换掉。

## 一个最小记录结构

下面是虚构记录，只用于说明数据字段。它不对应真实地点或事件。

```json
{
  "record_id": "example-001",
  "location_ref": "fictional-site-a",
  "source_type": "staff_report",
  "observed_at": "2026-01-01T10:00:00+08:00",
  "observation": "演示记录：入口附近存在待核查积水报告",
  "review_status": "unverified",
  "assigned_reviewer": null,
  "action_status": "not_authorised"
}
```

其中，`unverified` 不是数据失败，而是一个需要保留的事实：系统尚未确认这条信息。记录进入数据库，也不意味着它已经被证明真实。

实际设计还应考虑访问权限、保留期限与纠错记录。若任务不需要个人身份信息，就不应为了以后“也许有用”而额外收集。

## 人工智能放在哪个位置

一个可能的用法，是把较长的公开通知整理为便于工作人员检查的要点，并为每项要点保留来源。另一个用法，是识别报告中缺失的时间或地点，提示补充，而不是自行猜测。

但结构化输出不能自动保证真实性。因此，重要字段应尽量通过可核对的规则检查；生成内容不能直接写入已确认状态，也不能获得执行高后果操作的权限。

我也希望把外部文本视为待处理数据，而不是能够改变系统权限的指令。系统应当明确区分信息输入与操作授权，并在测试中检查错误输入、来源混淆和越权请求。

只有与不使用大模型的简单方法比较之后，才能判断生成式模块是否值得加入。

## 权限应当在系统中被明确表达

| 角色 | 可以参与的事情 | 需要限制的事情 |
| --- | --- | --- |
| 信息提供者 | 提交情况、补充证据、提出更正 | 不能自行把报告改成已批准指令 |
| 复核人员 | 检查来源、现场补充、标记冲突 | 不能默认拥有所有决策权限 |
| 有权限的决策者 | 在职责范围内安排工作并说明理由 | 不能无痕删除重要更正与异议 |
| 系统维护者 | 修复程序、维护访问与日志 | 不应以修改参数的方式私自改变公共目标 |

这只是初步角色模型。真实职责需要与使用机构共同确认，不能由开发者替其设定。

<!-- 配图位置：后续原型的核查清单或详情页。在原型尚未完成前，不用概念图冒充运行截图。 -->

## 错误与中断需要提前设计

如果数据连接失效，界面应当明确显示最后更新时间，而不是继续把旧数据当作实时信息。如果两个来源冲突，相关建议需要保持待核查状态。

如果没有复核人员，不能因为等待时间已到就默认批准。系统应回到事先约定的工作安排，由既有职责和预案处理，而不是临时创造自动执行权。

“无法提供可靠建议”应当是被允许的输出。对于公共系统，知道何时不应依赖某项自动结果，本身就是功能的一部分。

## 怎样证明它值得使用

最初可以使用合成资料和脱敏文本做离线测试，检查来源是否对应、字段是否缺失、建议能否被追溯，以及有问题的记录是否进入了正确状态。

下一阶段可以比较同一任务下的普通清单、规则方法和人工智能辅助方法，观察遗漏、处理时间、错误发现能力与使用负担。在没有授权之前，不让实验结果影响实际处置。

即使这些测试表现良好，也只能说明某些技术与使用要求得到支持。若要证明减少了损失或改善了分配，还需要更完整的现实评估。

## 这个构想对我意味着什么

我希望把它作为连接研究与开发的起点。系统不必一开始就复杂，但每个状态、权限与评价指标都应有明确理由。

计算机背景能够帮助我实现这些要求；课程中的治理视角则提醒我继续追问：这些要求由谁提出，遗漏了谁，以及怎样允许使用者和受影响者纠正它。

## 资料与阅读

- NIST，2023，[AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)。作为情境化风险管理的阅读参照。
- NIST，[AI RMF Playbook: GOVERN](https://airc.nist.gov/airmf-resources/playbook/govern/)。用于进一步检查角色与职责安排。
- Bu 等，2024，[气候适应治理比较报告](https://napawash.org/news/adapting-to-the-impacts-of-climate-change-a-comparative-study-of-governance-processes-in-australia-china-and-the-united-states)。
