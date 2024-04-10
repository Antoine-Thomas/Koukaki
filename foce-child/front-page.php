<?php get_header(); ?>

<main id="primary" class="site-main navigation-active">

    <section id="story" class="story fade-in parallax-element">
        <h2><span id="text">L'histoire</span></h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',
        );
        $characters_query = new WP_Query($args);
        ?>
        <article id="characters" class="fade-in section">
    <div class="characters-carousel">
        <div class="character-container">
            <!-- Div de gauche -->
        </div>
        <section class="main-character swiper-container swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper">
            <h3 id="new-title">Les personnages</h3>
                    <!-- Carrousel Swiper -->
                    <div class="swiper-wrapper ">
                        <?php
                        // Adresses locales des images avec les noms des personnages
                        $image_paths = array(
                            "/wp-content/uploads/2022/06/Jaakuna.png" => "Jaakuna",
                            "/wp-content/uploads/2022/06/Tenshi.png" => "Tenshi",
                            "/wp-content/uploads/2022/06/Kawaneko.png" => "Kawaneko",
                            "/wp-content/uploads/2022/06/Orenjiiro.png" => "Orenjiiro",
                            "/wp-content/uploads/2022/06/Pinku.png" => "Pinku"
                        );
                        
                        // Boucle à travers les adresses des images avec les noms
                        foreach ($image_paths as $image_path => $image_name) {
                            echo '<div class="swiper-slide">';
                            echo '<figure>';
                            echo '<img src="' . $image_path . '" />';
                            echo '<figcaption>' . $image_name . '</figcaption>';
                            echo '</figure>';
                            echo '</div>';
                        }
                        ?>
                    </div>
        </section>
                
        </article>
        <article id="lieu" class="fade-in section">
            <img class="place--big_cloud" src="<?php echo get_theme_file_uri() . '/assets/images/big_cloud.png'; ?>" alt="Gros nuage qui passe">
            <img class="place--little_cloud" src="<?php echo get_theme_file_uri() . '/assets/images/little_cloud.png'; ?>" alt="Petit nuage qui passe">
            <div class="lieu-container">
                <div>
                    <h3 id="lelieu">Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
            </div>
        </article>
    </section>

    <section id="studio" class="studio fade-in parallax-element ">
        <h2><span id="text">Studio Koukaki</span></h2>
        <div>
            <p>Acteur majeur de l'animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d'innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente "Fleurs d'oranger et chats errants".</p>
        </div>
    </section>
</main>

<?php get_footer(); ?>
