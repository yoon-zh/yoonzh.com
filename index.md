---
layout: default
title: Home
---

# Welcome to My Portfolio

## Featured Projects
{% for project in site.projects limit:3 %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}
