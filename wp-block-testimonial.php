<?php
/**
 * Plugin Name:       Testimonial Block
 * Description:       Shares feedback, review etc. of other people.
 * Requires at least: 5.8
 * Requires PHP:      7.1
 * Version:           2.4.1
 * Author:            SMFB Dinamo
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpd-blocks
 *
 * @package           wpd
 */

function wpd_block_testimonial_block_init() {
	register_block_type( __DIR__ );
}

add_action( 'init', 'wpd_block_testimonial_block_init' );
