(function () {
    'use strict';

    angular
        .module('userApp.service', [])
        .factory('Service', service);

    service.$inject = [];

    function service() {

        var params = {};

        return {
            getSearch: getSearch,
            setSearch: setSearch
        }


        function setSearch(p) {
            params = p;
        }

        function getSearch() {
            return params;
        }
    }
})();
