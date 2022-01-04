<?php
/**
 * Plugin Name:       Testimonial Block
 * Description:       Shares feedback, review etc. of other people.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           2.0.2
 * Author:            Innocode
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       innocode-block-testimonial
 *
 * @package           innocode
 */

function innocode_block_testimonial_block_init() {
	register_block_type( __DIR__ );
}

add_action( 'init', 'innocode_block_testimonial_block_init' );
