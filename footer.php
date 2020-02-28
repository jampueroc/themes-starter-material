
			</div><!-- /.mdc-grid__inner -->
		</main><!-- /#main -->

		<footer id="footer" class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
			<div class="mdc-layout-grid footer__content">
				
				<p class="copyright">
					<small>&copy; <?php echo date( 'Y' ); ?> <?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?></small>
				</p>
/*
				<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-menu',
							'container'      => '',
							'items_wrap'     => '<ul class="mdc-list">%3$s</ul>',
							'depth'          => 1,
						)
					);
				?> */
			</div><!-- /.footer-content -->
		</footer>
	</div><!-- /#wrapper -->

<?php wp_footer(); ?>

</body>
</html>
