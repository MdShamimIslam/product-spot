<?php
/**
 * Plugin Name: Product Spot 
 * Description: Add clickable hotspots on product image to show part-specific details interactively.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: product-spot
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'PS_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PS_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PS_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'PSPlugin' ) ){
	class PSPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );

		}
	}
	new PSPlugin();
}