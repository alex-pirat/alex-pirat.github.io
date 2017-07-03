$(function() {
  $('.main_menu').click(function() {
    $('.main_menu_opened').show(500);
    $('.main_logo').hide(500);
  });
  $('.main_menu_opened .closes').click(function() {
    $('.main_menu_opened').hide(500);
    $('.main_logo').show(500);
  });
});