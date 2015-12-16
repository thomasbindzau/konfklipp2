(function () {
    'use strict';

    angular
        .module('userApp.service', [])
        .factory('Service', service);

    service.$inject = [];

    function service() {

        var params = {};
        var destination = null;

        return {
            getSearch: getSearch,
            setSearch: setSearch,
            getResult: getResult,
            setResult: setResult
        }


        function setSearch(p) {
            params = p;
        }

        function getSearch() {
            return params;
        }

        function setResult(dest) {
            destination = dest;
        }

        function getResult() {
            return destination;
        }
    }
})();
