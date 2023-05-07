---
title: Home
permalink: /
date: 2023-05-06T21:14:08.384Z
---

# Howdy from GitHub Pages!

<h2>Pages:</h2>

<ul>
{% for item in collections.all %}
  <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
{% endfor %}

</ul>