---
layout: default
title: Posts
---

# Posts

{% assign projects = site.pages | where: "layout", "project" | sort: "date" | reverse %}
{% for project in projects %}
- [{{ project.card_title }}]({{ project.url }})
{% endfor %}
