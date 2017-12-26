<?php
// Incluir estilos necessários no tema
function my_wp_styles() {
   wp_enqueue_style('materialize', get_template_directory_uri() . '/assets/css/materialize.min.css');
   wp_enqueue_style('style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'my_wp_styles');
// Incluir scripts necessários no tema
function my_wp_scripts() {
   wp_enqueue_script('meterialize', get_template_directory_uri() . '/assets/js/materialize.min.js', array('jquery'), '3.2.1', true);
   // wp_enqueue_script('outro', get_template_directory_uri() . '/js/outro.js', array(), '1.3.5', false);
}
add_action('wp_enqueue_scripts', 'my_wp_scripts');
