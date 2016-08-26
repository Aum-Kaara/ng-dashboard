// create the controller and inject Angular's $scope
angular.module('TaskApp')
.controller('tableCtrl', ['$scope','$http','DTOptionsBuilder','DTColumnBuilder',function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
			
			this.dtOptions = DTOptionsBuilder
        .fromSource('app/Data/datatables.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.dtColumns = [
        DTColumnBuilder.newColumn('id').withClass('text-danger'),
        DTColumnBuilder.newColumn('name'),
        DTColumnBuilder.newColumn('phone'),
        DTColumnBuilder.newColumn('company'),
        DTColumnBuilder.newColumn('zip'),
        DTColumnBuilder.newColumn('city'),
        DTColumnBuilder.newColumn('date')
    ];

    
}]);// end TabsDemoCtrl