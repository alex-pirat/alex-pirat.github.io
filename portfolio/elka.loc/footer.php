      <div class="footer" id="footer">
        <div class="block">
          <a href="#logo" class="button">наверх</a>
        </div>
        <div class="block">
          <p>Copyright © <b>Ёлкин Двор 2017</b>, Старый Оскол</p>
        </div>
        <div class="block">
          <span>Остались вопросы?</span>
          <span>Звоните!</span>
          
          <a href="tel:8(4725)233-717" class="tel">8(4725) <b>233-717</b></a>
        </div>
      </div>
    </div>
    
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="wrap_form">
          <form action="#">
            <h3>Оставьте заявку</h3><button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4>и Мы с Вами свяжемся в ближайшее время</h4>
              <div class="wrap_form_input">
                <input type="text" placeholder="*ваше имя">
              </div>
              <div class="wrap_form_input">
                <input type="text" placeholder="*номер телефона">
              </div>
              <div class="wrap_form_button">
                <button>оставить заявку</button>
              </div>
          </form>
        </div>

      </div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/libs/slick/slick.min.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/js/bootstrap.min.js"></script>
    <script src="<?php bloginfo('template_url'); ?>/js/common.js"></script>
    <script>
      $('.slide').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    </script>
    <?php wp_footer(); ?>
  </body>
</html>