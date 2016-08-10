'use strict';

angular.module('TaskApp')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'Directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope){
        $scope.selectedMenu = "dashboard", 
		$scope.showingSubNav = 0, 
		$scope.showSubNav = function (t) {
			console.log(t);
            $scope.showingSubNav = t ;
      };
      }
    }
  }]);
