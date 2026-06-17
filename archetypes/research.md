{{- $slug := .File.ContentBaseName -}}
{{- if or (eq $slug "index") (hasPrefix $slug "index.") -}}{{- $slug = path.Base .File.Dir -}}{{- end -}}
---
title: "{{ replace $slug "-" " " | title }}"
subtitle: ""
date: {{ .Date }}
draft: false
featured: false
categories: ["Research"]
fields: []
areas: []
tags: []
status: ["in-progress"]
questions: []
retrospective_notes: []
---
