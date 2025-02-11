---
layout: default
title: Home
---

# Home

## Featured Projects
{% for project in site.projects limit:3 %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}

## Contact
📧 Email: [yoon_zh@outlook.com](mailto:yoon_zh@outlook.com)  
💼 LinkedIn: [View](https://www.linkedin.com/in/jorge-porras-1a7393282/)  
🐱 GitHub: [github.com/yoon-zh](https://github.com/yoon-zh)