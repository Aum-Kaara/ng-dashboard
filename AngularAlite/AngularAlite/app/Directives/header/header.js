'use strict';

angular.module('TaskApp')
	.directive('header',function(){
		return {
        templateUrl:'app/Directives/header/header.html',
        restrict: 'E',
        replace: true,
    	}
	});


