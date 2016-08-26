var TaskApp = angular.module('TaskApp', ['ngRoute', 'datatables', 'ngAnimate', 'ui.bootstrap', 'toastr', 'ngResource','datatables.bootstrap']);

TaskApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/table/dynamic", {
        templateUrl: 'app/pages/tables/table.html'
    }).when("/table/basic", {
        templateUrl: 'app/pages/tables/basictable.html'
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
    }).when('/samplepages/404', {
        templateUrl: 'app/pages/samplepages/404.html'
    }).when('/samplepages/500', {
        templateUrl: 'app/pages/samplepages/500.html'
    }).when('/samplepages/blank', {
        templateUrl: 'app/pages/samplepages/blank.html'
    }).when('/outlook', {
        templateUrl: 'app/pages/inbox.html'
    }).when('/Charts/Morris', {
        templateUrl: 'app/pages/charts/Morris.html'
    }).when('/AppView/Products', {
        templateUrl: 'app/pages/AppView/Products.html'
    }).when('/AppView/Orders', {
        templateUrl: 'app/pages/AppView/Orders.html'
    }).otherwise({ redirectTo: '/table/dynamic' });

}]);



