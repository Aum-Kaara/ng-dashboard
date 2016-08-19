var TaskApp = angular.module('TaskApp', ['ngRoute', 'datatables', 'ngAnimate', 'ui.bootstrap', 'toastr', 'ngResource','datatables.bootstrap']);

TaskApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/table/dynamic", {
        templateUrl: 'app/pages/tables/table.html'
    }).when("/table/basic", {
        templateUrl: 'app/pages/tables/basictable.html'
    }).when("/table/datatable", {
        templateUrl: 'app/pages/tables/datatable.html'
    }).when("/ui/buttons", {
        templateUrl: 'app/pages/ui/button.html'
    }).when("/ui/notifications", {
        templateUrl: 'app/pages/ui/notifications.html'
    }).when('/forms/advanced', {
        templateUrl: 'app/pages/forms/advanced.html'
    }).when('/forms/Basic', {
        templateUrl: 'app/pages/forms/formstandard.html'
    }).when('/forms/Elements', {
        templateUrl: 'app/pages/forms/Elements.html',
        controller: 'FormElementsController',
        controllerAs: 'vm'
    }).when('/forms/wizard', {
        templateUrl: 'app/pages/forms/wizard.html',
        controller: 'WizardCtrl',
        controllerAs: 'vm'
    }).when('/forms/validation', {
        templateUrl: 'app/pages/forms/validation.html',
        controller: 'FormValidationController',
        controllerAs: 'form'
    }).otherwise({ redirectTo: '/table/dynamic' });

}]);



