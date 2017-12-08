<?php 
if (is_page('121')) {
 include(TEMPLATEPATH.'/header-p-blockhaus.php');
 } else {
 include(TEMPLATEPATH.'/header.php');
 } ?>
        
<?php the_post(); ?>
<?php the_content(); ?>
      
<?php get_footer(); ?>

