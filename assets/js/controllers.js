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
		$http.get('/wp-json/posts?slug=' + $routeParams.slug).success(function (data) {
			$scope.post = data.post;
		});
	}]);

	spaThemeControllers.controller('PageDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$http.get('/wp-json/pages?slug=' + $routeParams.slug).success(function (data) {
			$scope.post = data.post;
		});
	}]);
})();