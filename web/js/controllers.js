'use strict';

var f1StatsControllers = angular.module('f1StatsControllers', []);

f1StatsControllers.controller('driversAll', ['$scope', 'Series', function($scope, Series) {
    $scope.drivers = null;
    Series.get({
        query: 'drivers.json',
        queryString: 'limit=1000'
    })
    .$promise.then(function(data) {
        $scope.drivers = data.MRData.DriverTable.Drivers;
    });
}]);
