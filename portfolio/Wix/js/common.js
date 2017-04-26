$(document).ready(function(){

// hide #back-top first
$("#back-top2").hide();

// fade in #back-top
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$('#back-top2').fadeIn();
} else {
$('#back-top2').fadeOut();
}
});

// scroll body to 0px on click
$('#back-top2 a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});

$(window).bind("scroll", function() {
var container = $("#menu");
var scroll = window.pageYOffset;
if(scroll > container.offset().top && !container.hasClass("top-fixed")) {
container.addClass("top-fixed");
} 
if(scroll < 400 && container.hasClass("top-fixed")) {
container.removeClass("top-fixed");
}
});

$(window).bind("scroll", function() {

var logo = $("#main");
var scroll = window.pageYOffset;
var logo_top = logo.offset().top - 145;

if(logo_top >= 335 && !logo.hasClass("logo-fixed"))
{
logo.addClass("logo-fixed");
$("#logo-circles").fadeOut();
}
if(scroll < 335 && logo.hasClass("logo-fixed"))
{
logo.removeClass("logo-fixed");
$("#logo-circles").fadeIn();
}
});
});



$(function() {
  $('.toggle-menu button').click(function() {
    $(this).siblings(".toggle-menu button").toggle();
    $(this).toggleClass('active');
  });
});
$(".toggle-menu").click(function(){   
  $(this).next(".toggle-nav").toggle();
});