'use strict';

var f1StatsServices = angular.module('f1StatsServices', ['ngResource']);

f1StatsServices.factory('Series', [
    '$resource',
    function($resource){
        return $resource('http://ergast.com/api/:series/:query?:queryString',
        {
            query: '@query',
            queryString: '@queryString'
        },
        {
            get: {
                method: 'GET',
                params: {
                    series: 'f1',
                    query: '',
                    queryString: ''
                }
            }
        });
    }
]);

f1StatsServices.factory('Season', [
    '$resource',
    function($resource){
        return $resource('http://ergast.com/api/:series/:season/:query?queryString',
        {
            season: '@season',
            query: '@query',
            queryString: '@queryString'
        },
        {
            get: {
                method: 'GET',
                params: {
                    series: 'f1',
                    season: '',
                    query: '',
                    queryString: ''
                }
            }
        });
    }
]);

f1StatsServices.factory('Round', [
    '$resource',
    function($resource){
        return $resource('http://ergast.com/api/:series/:season/:round/:query?queryString',
        {
            season: '@season',
            round: '@round',
            query: '@query',
            queryString: '@queryString'
        },
        {
            get: {
                method: 'GET',
                params: {
                    series: 'f1',
                    season: '',
                    round: '',
                    query: '',
                    queryString: ''
                }
            }
        });
    }
]);
