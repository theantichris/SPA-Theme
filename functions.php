<?php

function spa_theme_register_scripts_styles() {
	$version = '0.0.0';

	wp_register_script( 'modernizr', get_template_directory_uri() . '/bower_components/modernizr/modernizr.js', array( 'jquery' ), $version );
	wp_enqueue_script( 'modernizr' );
}

add_action( 'wp_enqueue_scripts', 'spa_theme_register_scripts_styles' );