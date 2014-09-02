'use strict';

(function () {
	var spaThemeControllers = angular.module('spaThemeControllers', []);

	spaThemeControllers.controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('/wp-json/posts').success(function (data) {
			$scope.posts = data;
		});

		$http.get('/wp-json/pages').success(function (data) {
			$scope.pages = data;
		});
	}]);

	spaThemeControllers.controller('PostDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$http.get('/wp-json/posts?filter[name]=' + $routeParams.slug).success(function (data) {
			$scope.post = data[0];
		});
	}]);

	spaThemeControllers.controller('PageDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$http.get('/wp-json/pages?filter[name]=' + $routeParams.slug).success(function (data) {
			$scope.page = data[0];
		});
	}]);
})();