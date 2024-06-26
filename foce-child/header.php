<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site fade-in">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <div id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" title="Menu">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>

                <ul class="menu fade-in">
                    <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                </ul>

                <!-- Burger menu container to hold all navigation items -->
                <div class="burger-menu-container fade-in site-header masthead">
                    
                        <nav id="site-navigation" class="main-navigation">
                            <ul class="menu nav-menu">
                                <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home">Fleurs d'oranger &amp; chats errants</a></li>
                            </ul>
                        </nav>
                        <div class="menu-header menu nav-menu site-title">
                            <div class="logo-small">
                                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                    <img src="https://www.koukaki.searching-murphy.com/wp-content/themes/foce-child/assets/images/logo.png" alt="logo Fleurs d'oranger & chats errants" id="logo-small" class="fade-in">
                                </a>
                            </div>
                            <button class="close-menu "></button>
                        </div>
                        <nav class="menu-nav">
                            <div class="jaakuna" aria-hidden="true"></div>
                            <div class="kawaneko" aria-hidden="true"></div>
                            <div class="orenjiiro" aria-hidden="true"></div>
                            <div class="hibiscus-footer" aria-hidden="true"></div>

                            <ul>
                                <li class="menu-item"><a href="#story">Histoire</a></li>
                                <li class="menu-item"><a href="#characters">Personnages</a></li>
                                <li class="menu-item"><a href="#lieu">Lieu</a></li>
                                <li class="menu-item"><a href="#studio">Studio Koukaki</a></li>
                                <a class="studiok" href="#">STUDIO KOUKAKI</a>
                            </ul>
                        </nav>
                    </header>
                </div>
            </nav>
        </div>

        <div class="videolog fade-in">
            <video autoplay loop muted id="video-videolog">
                <source src="https://www.koukaki.searching-murphy.com/wp-content/themes/foce-child/assets/images/video.mp4" type="video/mp4" id="video" class="fade-in">
            </video>
            <img src="https://www.koukaki.searching-murphy.com/wp-content/themes/foce-child/assets/images/banner.png" alt="banner" id="banner" class="fade-in">
            <div id="logo-container" class="fade-in">
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                    <img src="https://www.koukaki.searching-murphy.com/wp-content/themes/foce-child/assets/images/logo.png" alt="logo Fleurs d'oranger & chats errants" id="logo" class="parallax-element">
                </a>
            </div>
        </div>

    </div>