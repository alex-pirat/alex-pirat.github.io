<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php bloginfo('name'); ?></title>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/libs/slick/slick.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/libs/slick/slick-theme.css">
    <link href="<?php bloginfo('template_url'); ?>/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/fonts.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/style.css">
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <?php wp_head(); ?>
  </head>
  <body>
    
    <div id="wrapper">
      <div class="wrap">
        <div class="row" id="menu_top">
          <div class="col-xs-6 col-sm-3 wrap_logo">
            <a id="logo" href="<?php echo home_url(); ?>"><img src="<?php bloginfo('template_url'); ?>/img/logo.png" alt=""></a>
          </div>
          <div class="col-xs-3 col-sm-6 wrap_menu">
            <ul class="menu_top">
              <li class="one"><a href="#">о нас<span></span></a></li>
              <li class="two"><a href="#products">продукция<span></span></a></li>
              <li class="three"><a class="active" href="#">отделка<span></span></a></li>
              <li class="four"><a href="#contact">контакты<span></span></a></li>
            </ul>
          </div>
          <div id="menu">
            <div class="toggle-menu">
              <button class="cmn-toggle-switch cmn-toggle-switch__htx">
                <span>toggle menu</span>
              </button>
            </div>
            <div class="toggle-nav" id="toggle-nav">
                <ul>
                  <li><a href="#">о нас</a></li>
                  <li><a href="#products">продукция</a></li>
                  <li><a class="active" href="#">отделка</a></li>
                  <li><a href="#contact">контакты</a></li>
                </ul>
            </div>
          </div>
          <div class="col-xs-6 col-sm-3 wrap_contact">
            <div class="wrap_contact_block">
              <span class="wrap_contact_up">
                8(475) <b>233-717</b>
              </span>
              <span class="wrap_contact_medium">
                elkin-dvor@mail.ru
              </span>
              <div class="button">
                <a href="#">Заказать звонок</a>
              </div>
            </div>
          </div>
        </div>

        