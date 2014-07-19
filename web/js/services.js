'use strict';

var f1StatsServices = angular.module('f1StatsServices', ['ngResource']);

f1StatsServices.factory('Series', [
    '$resource',
    function($resource){
        return $resource('http://ergast.com/api/:series/:query.json',
        {
            query: '@query'
        },
        {
            get: {
                method: 'GET',
                params: {
                    series: 'f1',
                    query: ''
                }
            }
        });
    }
]);

f1StatsServices.factory('Season', [
    '$resource',
    function($resource){
        return $resource('http://ergast.com/api/:series/:season/:query.json',
        {
            season: '@season',
            query: '@query'
        },
        {
            get: {
                method: 'GET',
                params: {
                    series: 'f1',
                    season: '',
                    query: ''
                }
            }
        });
    }
]);

f1StatsServices.factory('Round', [
    '$resource',
    function($resource){
        return $resource('http://ergast.com/api/:series/:season/:round/:query.json',
        {
            season: '@season',
            round: '@round',
            query: '@query'
        },
        {
            get: {
                method: 'GET',
                params: {
                    series: 'f1',
                    season: '',
                    round: '',
                    query: ''
                }
            }
        });
    }
]);
