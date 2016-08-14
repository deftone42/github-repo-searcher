/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .directive('leftPanel', leftPanel);

  /**
   * Left Panel Directive
   * @param $state
   * @param $stateParams
   * @param leftPanelService
   * @returns directive
   */
  function leftPanel($state, $stateParams, leftPanelService) {

    return {
      restrict: 'E',
      templateUrl: 'src/app/components/left-panel.directive.html',
      controller: leftPanelController,
      controllerAs: 'vm'
    };

    /**
     * Left panel directive controller
     */
    function leftPanelController() {
      var vm = this;
      vm.go = go;
      vm.isActive = isActive;

      init();

      ///////////////////////////////////////////////////////////

      function init() {
        vm.navItems = leftPanelService.getMenuNav;
      }

      /**
       * Redirect to the pressed state
       * @param navItem
       */
      function go(navItem) {
        $state.go(navItem, {q: $stateParams.q});
      }

      /**
       * Return if the nav item is the current state
       * @param navItem
       * @returns {boolean}
       */
      function isActive(navItem) {
        return $state.current.name === navItem
      }
    }
  }
}());