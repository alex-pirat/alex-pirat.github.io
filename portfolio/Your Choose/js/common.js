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
(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs2').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);




 function show(){
    show.visible = '2';
    show.hidden = '3';
    show.hidden = show.visible;
    show.visible = (show.visible === '2')?'3':'2';
    document.getElementById(show.visible).style.display = 'inline-block';
    document.getElementById(show.hidden).style.display = 'none';
}

 function show2(){
    show.visible = '3';
    show.hidden = '4';
    show.hidden = show.visible;
    show.visible = (show.visible === '3')?'4':'3';
    document.getElementById(show.visible).style.display = 'inline-block';
    document.getElementById(show.hidden).style.display = 'none';
}

 function show3(){
    show.visible = '4';
    show.hidden = '5';
    show.hidden = show.visible;
    show.visible = (show.visible === '4')?'5':'4';
    document.getElementById(show.visible).style.display = 'inline-block';
    document.getElementById(show.hidden).style.display = 'none';
}

(function(){
  $('.menu-left').click(function(){
    $('header').toggleClass('active')
    $('.intro').toggleClass('active')
    $('section').toggleClass('active')
    $('#menu-left').toggleClass('active')
    $('footer').toggleClass('active')
  })
})()

$(document).ready(function(){
   $('.nice-textbox').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label').addClass("focus")
      });
   $('.nice-textbox2').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label2').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label2').addClass("focus")
      });
   $('.nice-textbox3').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label3').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label3').addClass("focus")
      });
   $('.nice-textbox4').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label4').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label4').addClass("focus")
      });
   $('.nice-textbox5').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label5').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label5').addClass("focus")
      });
   $('.nice-textbox6').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label6').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label6').addClass("focus")
      });
   $('.nice-textbox7').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label7').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label7').addClass("focus")
      });
});