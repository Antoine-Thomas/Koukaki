<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>

	<footer id="colophon" class="site-footer hidden">
        <ul>
            <li><a href="<?php echo (get_site_url())?>/politique-confidentialite" >Mentions Légales</a></li>
            <li><a href="<?php echo (get_site_url())?>">STUDIO KOUKAKI</a></li>
            <li><a href="<?php echo (get_site_url())?>/contact">Contact</a></li>
        </ul>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
