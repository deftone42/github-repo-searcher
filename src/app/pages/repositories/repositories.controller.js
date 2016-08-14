/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .controller('RepositoryController', repositoryController);

  /**
   * Repository Controller
   * @param $rootScope
   * @param $state
   * @param $stateParams
   * @param repositoryService
   */
  function repositoryController($rootScope, $state, $stateParams, repositoryService) {
    var vm = this;
    vm.search = search;

    init();

    ////////////////////////////////////////////////////////////////////////////

    function init() {
      vm.searchString = "";

      if($stateParams.q) {
        search($stateParams.q);
      }
    }

    /**
     * Search repositories by name
     * @param query
     */
    function search(query) {
      $rootScope.$broadcast('loading', {active: true});
      repositoryService.getRepositories(query)
        .then(function(res) {
          vm.repositories = res.items;
          vm.results = res.results;
        })
        .catch(function(err) {
          console.log(err);
        })
        .finally(function() {
          //We add the last search in the url to save it
          $state.transitionTo('repositories', {q: query}, { notify: false });
          $rootScope.$broadcast('loading', {active: false});
        });
    }
  }
}());