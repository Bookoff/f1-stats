'use strict';

var f1StatsControllers = angular.module('f1StatsControllers', []);

f1StatsControllers.controller('getDriversChampions', ['$scope', 'driversChampions', 'sortArray', 'buildArray', function($scope, driversChampions, sortArray, buildArray) {
    $scope.driversChampions = null;
    $scope.drivers = [];
    driversChampions.get()
        .$promise.then(function(data) {
            $scope.driversChampions = data.MRData.StandingsTable.StandingsLists;

            for (var i=0; i<$scope.driversChampions.length; i++) {
                $scope.drivers[i] = $scope.driversChampions[i].DriverStandings[0].Driver.nationality;
            }

            var talliedDrivers = sortArray.tally($scope.drivers);
            $scope.driversChampions = buildArray.nation(talliedDrivers);
        });
}]);

f1StatsControllers.controller('getConstructorsChampions', ['$scope', 'constructorsChampions', 'sortArray', 'buildArray', function($scope, constructorsChampions, sortArray, buildArray) {
    $scope.constructorsChampions = null;
    $scope.constructors = [];
    constructorsChampions.get()
        .$promise.then(function(data) {
            $scope.constructorsChampions = data.MRData.StandingsTable.StandingsLists;

            for (var i=0; i<$scope.constructorsChampions.length; i++) {
                $scope.constructors[i] = $scope.constructorsChampions[i].ConstructorStandings[0].Constructor.nationality;
            }

            var talliedConstructors = sortArray.tally($scope.constructors);
            $scope.constructorsChampions = buildArray.nation(talliedConstructors);
        });
}]);
