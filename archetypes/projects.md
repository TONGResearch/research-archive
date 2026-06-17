{{- $slug := .File.ContentBaseName -}}
{{- if or (eq $slug "index") (hasPrefix $slug "index.") -}}{{- $slug = path.Base .File.Dir -}}{{- end -}}
---
title: "{{ replace $slug "-" " " | title }}"
subtitle: ""
date: {{ .Date }}
draft: false
featured: false
categories: ["Projects"]
project_category: "ai-agent-systems"
tags: []
status: ["active"]
github_repo: ""
github_url: ""
demo_url: ""
tech_stack: []
---
