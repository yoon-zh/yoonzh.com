---
layout: default
title: Posts
---

# Posts

{% assign projects = site.pages | where: "layout", "project" | sort: "date" | reverse %}
{% for project in projects %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}
