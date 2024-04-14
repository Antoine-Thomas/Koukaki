<?php
// Enqueue styles and scripts
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles_and_scripts' );
function theme_enqueue_styles_and_scripts() {
    // Enqueue parent style
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
   
    // Enqueue child style
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'), wp_get_theme()->get('Version') );

    // Enqueue jQuery from WordPress core
    wp_enqueue_script( 'jquery' );

    // Enqueue custom JavaScript for fade in effect
    wp_enqueue_script( 'fade-in-script', get_stylesheet_directory_uri() . '/script.js', array( 'jquery' ), '1.0', true );

    // Enqueue Parallax script in the footer
    wp_enqueue_script('parallax-js', 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js', array(), '3.1.0', true);

    // Enqueue Swiper CSS and JavaScript
    wp_enqueue_style( 'swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@6.8.4/swiper-bundle.min.css' );
    wp_enqueue_script( 'swiper-script', 'https://cdn.jsdelivr.net/npm/swiper@6.8.4/swiper-bundle.min.js', array(), '6.8.4', true );
    wp_enqueue_script( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js', array(), false, true );

    // Enqueue compiled Sass file
    wp_enqueue_style( 'child-sass', get_stylesheet_directory_uri() . '/style.css', array(), filemtime( get_stylesheet_directory() . '/style.css' ) );
}


// Get customizer options from parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );

    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

