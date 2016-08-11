(function() {
  'use strict';

    angular.module('TaskApp')
    .directive('baWizard', baWizard);

  /** @ngInject */
  function baWizard() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/Directives/Wizard/baWizard.html',
      controllerAs: '$baWizardController',
      controller: 'baWizardCtrl'
    }
  }
})();
