---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

This page lists my publications and preprints.

{% if author.googlescholar %}
You can also find an up-to-date list on <a href="{{ author.googlescholar }}">Google Scholar</a>.
{% endif %}

{% include base_path %}

## General Relativity & Hyperbolic PDE

### Preprints
{% assign gr_pre = site.publications | where: "area", "gr" | where: "status", "preprint" | sort: "date" | reverse %}
{% for post in gr_pre %}
  {% include archive-single.html %}
  <div style="height:0.9em;"></div>
{% endfor %}

### Accepted / To appear
{% assign gr_acc = site.publications | where: "area", "gr" | where: "status", "accepted" | sort: "date" | reverse %}
{% for post in gr_acc %}
  {% include archive-single.html %}
  <div style="height:0.9em;"></div>
{% endfor %}

### Published
{% assign gr_pub = site.publications | where: "area", "gr" | where: "status", "published" | sort: "date" | reverse %}
{% for post in gr_pub %}
  {% include archive-single.html %}
  <div style="height:0.9em;"></div>
{% endfor %}

---

## Geometric Analysis

### Preprints
{% assign ga_pre = site.publications | where: "area", "ga" | where: "status", "preprint" | sort: "date" | reverse %}
{% for post in ga_pre %}
  {% include archive-single.html %}
  <div style="height:0.9em;"></div>
{% endfor %}

### Accepted / To appear
{% assign ga_acc = site.publications | where: "area", "ga" | where: "status", "accepted" | sort: "date" | reverse %}
{% for post in ga_acc %}
  {% include archive-single.html %}
  <div style="height:0.9em;"></div>
{% endfor %}

### Published
{% assign ga_pub = site.publications | where: "area", "ga" | where: "status", "published" | sort: "date" | reverse %}
{% for post in ga_pub %}
  {% include archive-single.html %}
  <div style="height:0.9em;"></div>
{% endfor %}
