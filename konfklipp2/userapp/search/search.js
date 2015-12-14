(function () {
    'use strict';

    angular
        .module('userApp.search', ['ngRoute'])
        .config([
            '$routeProvider', function ($routeProvider) {
                $routeProvider.when('/search', {
                    templateUrl: 'search/search.html',
                    controller: 'SearchController',
                    controllerAs: 'vm'
                });
            }
        ]);

    angular
    .module('userApp.start')
    .controller('SearchController', searchController);

    searchController.$inject = ['$window', '$location', 'Service'];

    function searchController($window, $location, service) {
        var vm = this;

        vm.searchParam = service.getSearch();


    }
})();