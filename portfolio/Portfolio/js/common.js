$(function() {
  $('.main_menu').click(function() {
    $('.main_menu_opened').show(500);
    $('.main_logo img').hide(500);
  });
  $('.main_menu_opened .closes').click(function() {
    $('.main_menu_opened').hide(500);
    $('.main_logo img').show(500);
  });
});