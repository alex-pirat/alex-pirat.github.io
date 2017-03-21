$(function () {
	$('.carousel').carousel({
	  interval: 10000
	});

	$('.search').on('click', function(){
		$('.main-menu .navbar-form').slideToggle();
	});
})