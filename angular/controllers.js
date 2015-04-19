var app = angular.module('thingzSimpleDatabase', []);

app.controller('MeierierController', function($scope, MeierierService) {
	MeierierService.query().success(function(meierier) {
		$scope.meierier = meierier;
	});

	$scope.newMeieri = {};

	$scope.save = function() {
		MeierierService.save($scope.newMeieri).success(function(meieri) {
			$scope.meierier.push(meieri);
			$scope.newMeieri = {};
		});
	};

	$scope.delete = function(id) {
		MeierierService.delete(id).success(function() {
			_.remove($scope.meierier, function(meieri) {
				return meieri._id === id;
			});
		});
	};
});

app.service('MeierierService', function($http) {
	var resource = '/api/meierier';

	this.query = function() {
		return $http.get(resource);
	};

	this.save = function(newMeieri) {
		return $http.post(resource, newMeieri);
	};

	this.delete = function(id) {
		return $http.delete(resource + '/' + id);
	};
});
