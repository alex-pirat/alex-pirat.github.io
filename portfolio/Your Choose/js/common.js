window.addEventListener("touchstart", function(event){
             if(event.target.tagName=="HTML" || event.target.tagName=="BODY"){
                     event.preventDefault();
             }
} ,false);


(function($){       
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide(1000);
                $(tabs).children("div").children("div").eq(i).show(1000);
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
   $('.nice-textbox8').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label8').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label8').addClass("focus")
      });
   $('.nice-textbox9').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label9').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label9').addClass("focus")
      });
});

jQuery(document).ready(function() {
  jQuery('#form_right2 select').styler();
})



$(document).ready(function(){
  $("#link, #scroll").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});


// проверяем поддержку position: fixed;[start]
var isFixedSupported = (function(){
  var isSupported = null;
  if (document.createElement) {
    var el = document.createElement("div");
    if (el && el.style) {
      el.style.position = "fixed";
      el.style.top = "10px";
      var root = document.body;
      if (root && root.appendChild && root.removeChild) {
        root.appendChild(el);
        isSupported = el.offsetTop === 10;
        root.removeChild(el);
      }
    }
  }
  return isSupported;
})();

// добавляем контекст для "старичков"
window.onload = function(){
  if (!isFixedSupported){
    document.body.className += ' no-fixed-supported' : '';
  }
// первичный scroll
  window.scrollBy(0, 1);
}