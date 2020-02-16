$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom',
        html: true
    })})



/* Banner Art */
$(window).scroll(function(){
    $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 250);
    });
	
/* Scroll to Top */
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});