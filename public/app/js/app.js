'use strict';

angular.module('angular-boilerplate', [
		'boilerplateControllers',
		'boilerplateDirectives',
		'ngRoute',
		'ngAnimate'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/example', {
			templateUrl: 'app/views/example.html',
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
