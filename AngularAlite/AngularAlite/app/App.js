var TaskApp = angular.module('TaskApp', ['ngRoute', 'datatables', 'ngAnimate', 'ui.bootstrap', 'toastr']);

TaskApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/table/basic", {
        templateUrl: 'views/dashboard/basictable.html',
        controller: 'tableCtrl'
    }).when("/table/dynamic", {
        templateUrl: 'app/pages/tables/table.html'
    }).when("/ui/buttons", {
        templateUrl: 'views/ui-elements/button.html'
    }).when("/ui/notifications", {
        templateUrl: 'views/ui-elements/notifications.html'
    }).when('/service-code-new', {
        templateUrl: 'views/dashboard/blockForm.html'
    }).when('/forms/advanced', {
        templateUrl: 'views/dashboard/advanced.html'
    }).otherwise({ redirectTo: '/table/dynamic' });

}]);

TaskApp.config(['toastrConfig', function (toastrConfig) {
    angular.extend(toastrConfig, {
        autoDismiss: false,
        closeButton: true,
        progressBar: true,
        containerId: 'toast-container',
        maxOpened: 0,
        newestOnTop: true,
        positionClass: 'toast-top-full-width',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body'
    });
}]);

