'use strict';

(function () {
	var spaThemeControllers = angular.module('spaThemeControllers', []);

	spaThemeControllers.controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('/api/get_posts').success(function (data) {
			$scope.posts = data.posts;
		});

		$http.get('/api/get_posts?post_type=page').success(function (data) {
			$scope.pages = data.posts;
		});
	}]);

	spaThemeControllers.controller('PostDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$http.get('/api/get_post?slug=' + $routeParams.slug).success(function (data) {
			$scope.post = data.post;
		});
	}]);

	spaThemeControllers.controller('PageDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$http.get('/api/get_post?post_type=page&slug=' + $routeParams.slug).success(function (data) {
			$scope.post = data.post;
		});
	}]);
})();