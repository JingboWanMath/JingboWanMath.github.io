---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Here are my research papers. They are available as PDF files and may differ slightly from the published versions.

{% if author.googlescholar %}
You can also find an up-to-date list on
<a href="{{ author.googlescholar }}">Google Scholar</a>.
{% endif %}

{% include base_path %}

<div class="publist">

## General Relativity & Hyperbolic PDE

### Preprints
<ul>
{% assign gr_pre = site.publications
   | where: "area", "gr"
   | where: "status", "preprint"
   | sort: "date"
   | reverse %}
{% for post in gr_pre %}
  {% include publication-bullet.html post=post %}
{% endfor %}
</ul>

### Accepted / To appear
<ul>
{% assign gr_acc = site.publications
   | where: "area", "gr"
   | where: "status", "accepted"
   | sort: "date"
   | reverse %}
{% for post in gr_acc %}
  {% include publication-bullet.html post=post %}
{% endfor %}
</ul>

### Published
<ul>
{% assign gr_pub = site.publications
   | where: "area", "gr"
   | where: "status", "published"
   | sort: "date"
   | reverse %}
{% for post in gr_pub %}
  {% include publication-bullet.html post=post %}
{% endfor %}
</ul>

---

## Geometric Analysis

### Preprints
<ul>
{% assign ga_pre = site.publications
   | where: "area", "ga"
   | where: "status", "preprint"
   | sort: "date"
   | reverse %}
{% for post in ga_pre %}
  {% include publication-bullet.html post=post %}
{% endfor %}
</ul>

### Accepted / To appear
<ul>
{% assign ga_acc = site.publications
   | where: "area", "ga"
   | where: "status", "accepted"
   | sort: "date"
   | reverse %}
{% for post in ga_acc %}
  {% include publication-bullet.html post=post %}
{% endfor %}
</ul>

### Published
<ul>
{% assign ga_pub = site.publications
   | where: "area", "ga"
   | where: "status", "published"
   | sort: "date"
   | reverse %}
{% for post in ga_pub %}
  {% include publication-bullet.html post=post %}
{% endfor %}
</ul>

</div>
