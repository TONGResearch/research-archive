{{- $slug := .File.ContentBaseName -}}
{{- if or (eq $slug "index") (hasPrefix $slug "index.") -}}{{- $slug = path.Base .File.Dir -}}{{- end -}}
---
title: "{{ replace $slug "-" " " | title }}"
subtitle: ""
date: {{ .Date }}
draft: false
featured: false
categories: ["Thoughts"]
fields: []
areas: []
tags: []
status: ["draft"]
questions: []
retrospective_notes: []
---
