$(".pr-grunt_menu_head").click(function() {
     $(this).closest('.pr-grunt_menu').find('ul').toggle(500);
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