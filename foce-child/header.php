<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

    <header id="masthead" class="site-header">
        <nav id="site-navigation" class="main-navigation">
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" title="Menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>

            <ul class="menu">
                <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></li>
            </ul>

            <!-- Burger menu container to hold all navigation items -->
            <div class="modal">
                <div class="modal-content">
                    <div class="burger-menu">
                        <ul>
                            <li class="burger-menu-story"><a href="#story">Histoire</a></li>
                            <li class="burger-menu-characters"><a href="#characters">Personnages</a></li>
                            <li class="burger-menu-lieu"><a href="#lieu">Lieu</a></li>
                            <li class="burger-menu-studio"><a href="#studio">Studio Koukaki</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav><!-- #site-navigation -->
    </header><!-- #masthead -->

    <div class="videolog">
        <video autoplay loop muted id="video-videolog">
            <source src="http://localhost:10083/wp-content/themes/foce-child/assets/images/video.mp4" type="video/mp4" id="video">
            <img src="http://localhost:10083/wp-content/themes/foce-child/assets/images/banner.png" alt="banner" id="banner">
        </video>
        <div id="logo-container">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                <img src="http://localhost:10083/wp-content/themes/foce/assets/images/logo.png" alt="logo Fleurs d'oranger & chats errants" id="logo" class="parallax-element">
            </a>
        </div>
    </div>
</div>


