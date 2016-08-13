/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .controller('RepositoryController', repositoryController);

  function repositoryController($rootScope, $stateParams, repositoryService) {
    var vm = this;
    vm.search = search;

    init();

    ////////////////////////////////////////////////////////////////////////////

    function init() {
      if($stateParams.q) {
        search($stateParams.q);
      }

      vm.searchString = "";
    }

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
          $rootScope.$broadcast('loading', {active: false});
        });
    }
  }
}());