---
layout: default
title: Home
---

{% for index in site.index %}
<div class="row">
  <div class="col-sm-12">
	  {{ index.content | markdownify }}
  </div>
</div>
{% endfor %}
<div class="row">
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