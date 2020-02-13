<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="#"><img class="navbar-logo" src="assets/img/icons/class_icons/ranger.png" /></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNavDropdown">
		<ul class="navbar-nav">
		  {% for item in site.data.navigation %}
			<li {% if page.url == item.link %}
				  class="nav-item active"
				{% else %}
				  class="nav-item"
				{% endif %}>
			  <a href="{{ site.baseurl }}{{ item.link }}" class="nav-link">
				{{ item.name }}
				{% if page.url == item.link %}
				 <span class="sr-only">(current)</span>
				{% endif %}
			  </a>
			</li>
		  {% endfor %}
		</ul>
	</div>
</nav>