{{- $slug := .File.ContentBaseName -}}
{{- if or (eq $slug "index") (hasPrefix $slug "index.") -}}{{- $slug = path.Base .File.Dir -}}{{- end -}}
---
title: "{{ replace $slug "-" " " | title }}"
subtitle: ""
date: {{ .Date }}
draft: false
featured: false
categories: ["Reading"]
fields: []
areas: []
tags: []
status: ["reading"]
questions: []
retrospective_notes: []
book:
  title: ""
  author: ""
  year: ""
  publisher: ""
  rating: ""
---
