---
title: Team
date: 2023-05-06T21:14:08.384Z
---

# Team Members

{% for teammember in teammembers %}
<div class='card'>
    <img src='/img/{{ teammember.profilePic }}'>
    <p>{{ teammember.firstName }} {{ teammember.lastName }}</p>
    <p>{{ teammember.about }}</p>
</div>
{% endfor %}