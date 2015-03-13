'use strict';

angular.module('boilerplateControllers', [] )


.controller('IndexController', ['$scope', function($scope) {
	$scope.pageTitle = "Angular Boilerplate v0.0.1";
}])

.controller('ExampleCtrl', ['$scope', function($scope) {
	$scope.title = "Example";
	$scope.animClass = "fade";
}]);

