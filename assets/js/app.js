'use strict';

(function () {
	var spaThemeApp = angular.module('spaThemeApp', ['ngRoute', 'spaThemeControllers']);

	spaThemeApp.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/main.html', controller: 'MainCtrl'});
	}]);
})();