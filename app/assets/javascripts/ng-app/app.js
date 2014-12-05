/**
 * Created with JetBrains RubyMine.
 * User: alex
 * Date: 28/10/14
 * Time: 8:29 PM
 * To change this template use File | Settings | File Templates.
 */
angular
    .module('AngularRails', [
        'ngRoute',
        'templates'
    ])
    .config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'

            })
            .when('/page',{
                templateUrl: 'page.html',
                controller: 'PageCtrl'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
