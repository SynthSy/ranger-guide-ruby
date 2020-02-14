<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="#"><img class="navbar-logo" src="assets/img/icons/class_icons/ranger.png" /></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNavDropdown">
		<ul class="nav navbar-nav">
			{% assign items = site.data.navigation %}
			{% for item in items %}
				{% assign class = nil %}
				{% if page.url contains item.link %}
					{% assign class = 'active' %}
				{% endif %}
				{% if item.sublinks %}
					<li class="dropdown {{ class }}">
						<a href="{{ site.baseurl }}{{ item.url }}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ item.name }} <span class="caret"></span></a>
						<ul class="dropdown-menu">
							{% for sublink in item.sublinks %}
								{% if sublink.name == 'separator' %}
									<li role="separator" class="divider"></li>
								{% else %}
									<li>
										<a href="{{ site.baseurl }}{{ sublink.link }}">{{ sublink.name }}</a>
									</li>
								{% endif %}
							{% endfor %}
						</ul>
					</li>
				{% else %}
					<li class="pr-1 {{ class }}">
						<a href="{{ site.baseurl }}{{ item.link }}">{{ item.name }}</a>
					</li>
				{% endif %}
			{% endfor %}
		</ul>
	</div>
</nav>