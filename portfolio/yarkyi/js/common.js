(function($){       
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);        
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });       
        };    
        return this.each(createTabs);
    };  
})(jQuery);
$(document).ready(function(){
    $(".tabs").lightTabs();
});

$(window).bind("scroll", function() {
var container = $("#menu");
var scroll = window.pageYOffset;
if(scroll > container.offset().top && !container.hasClass("top-fixed")) {
container.addClass("top-fixed");
} 
if(scroll < 200 && container.hasClass("top-fixed")) {
container.removeClass("top-fixed");
}
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

$(document).ready(function(){
    $("#gal_all").click(function () {
        if ($("#gal_content_two").is(":hidden")) {
            $("#gal_content_two").show("slow");
        } else {
            $("#gal_content_two").hide("slow");
        }
        return false;
    });
})

$(document).ready(function(){
    $("#news_all").click(function () {
        if ($("#news_content_two").is(":hidden")) {
            $("#news_content_two").show("slow");
        } else {
            $("#news_content_two").hide("slow");
        }
        return false;
    });
})