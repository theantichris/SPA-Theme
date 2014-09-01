'use strict';

(function () {
	var spaThemeControllers = angular.module('spaThemeControllers', []);

	spaThemeControllers.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
		console.log('It worked.');
	}]);
})();