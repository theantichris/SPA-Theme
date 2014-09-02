'use strict';

(function () {
	var spaThemeControllers = angular.module('spaThemeControllers', []);

	spaThemeControllers.controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('/?json_route=/posts').success(function (data) {
			$scope.posts = data;
		});

		$http.get('/?json_route=/pages').success(function (data) {
			$scope.pages = data;
		});
	}]);

	spaThemeControllers.controller('PostDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$http.get('/?json_route=/posts&filter[name]=' + $routeParams.slug).success(function (data) {
			$scope.post = data[0];
		});
	}]);

	spaThemeControllers.controller('PageDetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$http.get('/?json_route=/pages&filter[name]=' + $routeParams.slug).success(function (data) {
			$scope.page = data[0];
		});
	}]);
})();