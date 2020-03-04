<?php
/**
 * Template Name: Page (Default)
 * Description: Page template with Sidebar on the left side
 *
 */

	get_header();
?>

	<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-phone">
		<?php the_post(); ?>

		<div id="post-<?php the_ID(); ?>" <?php post_class( 'content' ); ?>>
        <?php if( !empty(the_title())): ?>
        <h1 class="entry-title"><?php the_title(); ?></h1>
        <?php endif; ?>

			<?php
				the_content();

				wp_link_pages( array(
					'before' => '<div class="page-links">' . __( 'Pages:', 'my-theme' ),
					'after'  => '</div>',
				) );
				edit_post_link( __( 'Edit', 'my-theme' ), '<span class="edit-link">', '</span>' );
			?>
		</div><!-- /#post-<?php the_ID(); ?> -->

		<?php
			// If comments are open or we have at least one comment, load up the comment template
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;
		?>

	</div><!-- /.mdc-cell -->
		
	<?php get_sidebar(); ?>

<?php get_footer(); ?>
