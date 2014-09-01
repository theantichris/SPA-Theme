<!DOCTYPE html>
<html <?php language_attributes(); ?> ng-app="spaThemeApp">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-COMPATIBLE" content="IE=edge">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

	{{ 1 + 1 }}

	<footer>&copy; <?= date('Y') . ' - ' . get_bloginfo('name'); ?></footer>
	<?php wp_footer(); ?>
</body>
</html>