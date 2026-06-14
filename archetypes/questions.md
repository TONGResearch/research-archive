---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: false
type: "page"
layout: "question-hub"
system_page: true
question_id: "{{ .File.ContentBaseName }}"
url: "/research/questions/{{ .File.ContentBaseName }}/"
featured_question: false
question_status: "open"
areas: []
question_description: ""
scope: ""
objectives: ""
current_position: ""
position_updated:
---
