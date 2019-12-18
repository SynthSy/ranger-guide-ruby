---
layout: default
title: Home
---

<div class="row">
{% for index in site.index %}
  <div class="col-sm-12">
	  {{ index.content | markdownify }}
  </div>
{% endfor %}
    <div class="col-sm-12">
        <section>
            <h1>Special Thanks</h1>
            <ul>
                <li>You</li>
                <li>Arks-Layer & Fleet Discord</li>
            </ul>
        </section>
    </div>
</div>