'use strict';

var f1StatsServices = angular.module('f1StatsServices', ['ngResource']);

f1StatsServices.factory('driversChampions', [
    '$resource',
    function($resource){
        return $resource('http://ergast.com/api/:series/:query/:queryValue?:queryString',
        {},
        {
            get: {
                method: 'GET',
                params: {
                    series: 'f1',
                    query: 'driverStandings',
                    queryValue: '1.json',
                    queryString: 'limit=100'
                }
            }
        });
    }
]);

f1StatsServices.factory('constructorsChampions', [
    '$resource',
    function($resource){
        return $resource('http://ergast.com/api/:series/:query/:queryValue?:queryString',
        {},
        {
            get: {
                method: 'GET',
                params: {
                    series: 'f1',
                    query: 'constructorStandings',
                    queryValue: '1.json',
                    queryString: 'limit=100'
                }
            }
        });
    }
]);

f1StatsServices.service('sortArray', function() {
    this.tally = function(array) {
        for (var resultObject = {}, item, i = array.length; i--;) {
            if (!((item = array[i]) in resultObject)) {
                resultObject[item] = 0; // Initialize a new counter
            }
            resultObject[item]++;
        }

        return resultObject;
    }
});

f1StatsServices.service('buildArray', function() {
    this.nation = function(object) {
        var i = 0,
            resultArray = [];

        for (var key in object) {
            resultArray[i] = {
                nationality: key,
                titles: object[key]
            };
            i++;
        }

        return resultArray;
    }
});
