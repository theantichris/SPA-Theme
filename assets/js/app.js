'use strict';

(function () {
	var spaThemeApp = angular.module('spaThemeApp', ['ngRoute', 'spaThemeControllers']);

	spaThemeApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {templateUrl: themeDir + '/partials/main.html', controller: 'IndexCtrl'})
			.when('/blog/:slug', {templateUrl: themeDir + '/partials/postDetail.html', controller: 'PostDetailCtrl'})
			.when('/:slug', {templateUrl: themeDir + '/partials/pageDetail.html', controller: 'PageDetailCtrl'});
	}]);
})();