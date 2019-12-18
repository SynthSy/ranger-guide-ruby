$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom',
        html: true
    })})



/* Banner Art */
$(window).scroll(function(){
    $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 250);
    });