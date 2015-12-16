(function() {

    'use strict';

// Declare app level module which depends on views, and components
    angular
        .module('userApp', [
            'ui.bootstrap',
            'ngRoute',
            'ngMessages',
            'userApp.start',
            'userApp.search',
            'userApp.result',
            'userApp.service'
    ])
        .config(config)
        .run(run);

    config.$inject = ['$httpProvider', '$routeProvider'];
    function config($httpProvider, $routeProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }


    run.$inject = ['$rootScope', '$location', '$window'];
    function run($rootScope, $location, $window) {
    }
})();

