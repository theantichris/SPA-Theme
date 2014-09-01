<?php

function spa_theme_register_scripts_styles() {
	$version   = '0.0.0';
	$bower_dir = '/bower_components';

	wp_register_script( 'modernizr', get_template_directory_uri() . $bower_dir . '/modernizr/modernizr.js', array(), $version );
	wp_enqueue_script( 'modernizr' );

	wp_register_style( 'normalize-css', get_template_directory_uri() . $bower_dir . '/normalize-css/normalize.css', array(), $version );
	wp_enqueue_style( 'normalize-css' );

	wp_register_script( 'angular', get_template_directory_uri() . $bower_dir . '/angular/angular.min.js', array(), $version );
}

add_action( 'wp_enqueue_scripts', 'spa_theme_register_scripts_styles' );