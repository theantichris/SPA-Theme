'use strict';

(function () {
	var spaThemeControllers = angular.module('spaThemeControllers', []);

	spaThemeControllers.controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('/api/get_posts').success(function (data) {
			$scope.posts = data.posts;
		});
	}]);

	spaThemeControllers.controller('PostDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$http.get('/api/get_post?slug=' + $routeParams.slug).success(function (data) {
			$scope.post = data.post;
		});
	}]);
})();