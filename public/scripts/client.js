

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {


    $routeProvider
        .when ('/main_view', {
          templateUrl: '/views/main_view.html',
          controller: 'MainController',
          controllerAs: 'mc'
        })
        .otherwise ({
            redirectTo: '/main_view'
        });

}]);//end of myApp.config








