<?php



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

     add_action( 'wp_enqueue_scripts', 'theme_enqueue_swiper' );
function theme_enqueue_swiper() {
    // Enqueue Swiper CSS
    wp_enqueue_style( 'swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@6.8.4/swiper-bundle.min.css' );

    // Enqueue Swiper JavaScript
    wp_enqueue_script( 'swiper-script', 'https://cdn.jsdelivr.net/npm/swiper@6.8.4/swiper-bundle.min.js', array(), '6.8.4', true );
}


}


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}




// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}