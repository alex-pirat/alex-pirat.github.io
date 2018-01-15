$(function() {
  $('#main_menu_products').click(function() {
    $(this).siblings("#main_menu_products").toggle();
    $(this).toggleClass('active');
  });
});
$("#main_menu_products").click(function(){   
  $(this).next(".main_menu_hover").toggle();
});