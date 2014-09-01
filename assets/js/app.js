'use strict';

(function () {
	var spaThemeApp = angular.module('spaThemeApp', ['ngRoute', 'spaThemeControllers']);

	spaThemeApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {templateUrl: themeDir + '/partials/main.html', controller: 'MainCtrl'});
	}]);
})();