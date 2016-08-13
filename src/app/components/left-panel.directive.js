/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .directive('leftPanel', leftPanel);

  function leftPanel($state, $stateParams) {

    return {
      restrict: 'E',
      templateUrl: 'src/app/components/left-panel.directive.html',
      controller: leftPanelController,
      controllerAs: 'vm'
    };

    function leftPanelController() {
      var vm = this;
      vm.go = go;
      vm.isActive = isActive;

      init();

      ///////////////////////////////////////////////////////////

      function init() {
        vm.navItems = [{
          name: 'repositories',
          value: 'Repositories'
        }, {
          name: 'issues',
          value: 'Issues'
        }, {
          name: 'charts',
          value: 'Charts'
        }];
      }

      function go(navItem) {
        $state.go(navItem, {q: $stateParams.q});
      }

      function isActive(navItem) {
        return $state.current.name === navItem
      }
    }
  }
}());