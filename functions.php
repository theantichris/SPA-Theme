<?php

function spa_theme_register_scripts_styles() {
	$version = '0.0.0';

	wp_register_script( 'modernizr', get_template_directory_uri() . '/bower_components/modernizr/modernizr.js', array(), $version );
	wp_enqueue_script( 'modernizr' );

	wp_register_style( 'normalize-css', get_template_directory_uri() . '/bower_components/normalize-css/normalize.css', array(), $version );
	wp_enqueue_style( 'normalize-css' );
}

add_action( 'wp_enqueue_scripts', 'spa_theme_register_scripts_styles' );