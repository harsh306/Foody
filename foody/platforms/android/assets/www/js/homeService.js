(function () {
    'use strict';

    var app = angular.module('foodyApp');
    app.factory('homeService', homeService) ;

    function homeService($http) {
        var service = {};

        service.getAppBuilds = getAppBuilds;

        return service;

        function getAppBuilds(api,callback)
        {
            return $http.get(api).success(function (response) {
                callback(response);
            });
        }
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }

    }

    })();
