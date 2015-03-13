'use strict';

angular.module('angular-boilerplate', [
		'boilerplateControllers',
		'boilerplateDirectives',
		'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/example', {
			templateUrl: 'app/views/example.html',
			controller: 'ExampleCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
