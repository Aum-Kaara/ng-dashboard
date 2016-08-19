// create the controller and inject Angular's $scope
angular.module('TaskApp')
.controller('tableCtrl', ['$scope','$http','DTOptionsBuilder','DTColumnBuilder',function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
		
		
		$scope.DocDetails = {};
        $http.get('Data/data.json').success(function(data) {
            $scope.DocDetails = data;
		});
		$scope.users = {}; 

	
	
		
		$scope.dtOptions = DTOptionsBuilder.fromSource('./Data/data.json').withPaginationType('full_numbers');
		
        $scope.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('ValuationRequestId').withTitle('Valuation RequestId'),
            DTColumnBuilder.newColumn('DocumentDetails').withTitle('Details'),
			DTColumnBuilder.newColumn('DocumentReceivedType').withTitle('ReceivedType'),
			DTColumnBuilder.newColumn('IsRequireToSendBack').withTitle('SendBack'),
			DTColumnBuilder.newColumn('DocumentLocation').withTitle('Document Location'),
			DTColumnBuilder.newColumn('SubmittedTo').withTitle('Submitted To'),
			DTColumnBuilder.newColumn('SubmittedDateTime').withTitle('Submitted DateTime'),
			DTColumnBuilder.newColumn('SubmitReceiveType').withTitle('Submit ReceiveType'),
			
        ];
		
		$scope.dtColumns.push(DTColumnBuilder.newColumn(null).withTitle('').withClass('pull-right').notSortable().renderWith(actionsHtml));
		function actionsHtml(data, type, full, meta) {
		
        $scope.DocDetails[data.id] = data;
        return '<a href="#" ng-click="viewUser(users[' + data.id + '])"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a><button ng-click="deleteSection()"><i class="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>';
		}
		
		$scope.deleteSection = function () {
			console.log('deleteSection');
      
    }
		
		
	
	
    
}]);// end TabsDemoCtrl