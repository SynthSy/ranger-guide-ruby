<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" charset="utf-8">
    <title>{{ page.title }}</title>
    <link rel="stylesheet" href="{{ site.baseurl}}/assets/css/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto+Slab&display=swap" rel="stylesheet">
  </head>
  <body>
	<header>
		{% include navigation.md %}
	</header>
    <main class="container">
		<button onclick="topFunction()" id="scrlTop" title="Go to top">Top</button>
            {{ content }}
    </main>
	<footer>
		{% include footer.md %}
	</footer>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="https://kit.fontawesome.com/3d638ed81f.js" crossorigin="anonymous"></script>
	<script>
	var scrlTop = document.getElementById("scrlTop");

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrlTop.style.display = "block";
	  } else {
		scrlTop.style.display = "none";
	  }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}
	</script>
	<script src="{{ 'assets/js/script.js' | relative_url }}"></script>
  </body>
</html>