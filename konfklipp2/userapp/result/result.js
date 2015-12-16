(function () {
    'use strict';

    angular
        .module('userApp.result', ['ngRoute'])
        .config([
            '$routeProvider', function ($routeProvider) {
                $routeProvider.when('/result', {
                    templateUrl: 'result/result.html',
                    controller: 'ResultController',
                    controllerAs: 'vm'
                });
            }
        ]);

    angular
    .module('userApp.result')
    .controller('ResultController', resultController);

    resultController.$inject = ['$window', '$location', 'Service'];

    function resultController($window, $location, service) {
        var vm = this;

        vm.destination = service.getResult();

        vm.status = {
            isopen: false
        };
    }
})();