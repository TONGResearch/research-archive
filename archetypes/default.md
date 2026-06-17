{{- $slug := .File.ContentBaseName -}}
{{- if or (eq $slug "index") (hasPrefix $slug "index.") -}}{{- $slug = path.Base .File.Dir -}}{{- end -}}
---
title: "{{ replace $slug "-" " " | title }}"
date: {{ .Date }}
tags: []
status: ["draft"]
questions: []
retrospective_notes: []
---
