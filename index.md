---
layout: home
title: Home
---

## Featured Projects
{% for project in site.projects limit:3 %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}
