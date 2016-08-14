/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .controller('RepositoryIssuesController', repositoryIssuesController);

  /**
   * Repository Issues Controller
   * @param $rootScope
   * @param $stateParams
   * @param issueService
   */
  function repositoryIssuesController($rootScope, $stateParams, issueService) {
    var vm = this;

    init();

    ////////////////////////////////////////////////////////////////////////////

    function init() {
      if($stateParams.q) {
        vm.repoName = $stateParams.q;
        getIssues($stateParams.q);
      }
    }

    /**
     * Search repositories by name
     * @param query
     */
    function getIssues(query) {
      $rootScope.$broadcast('loading', {active: true});
      issueService.getIssues("repo:" + query)
        .then(function(res) {
          vm.issues = res.items;
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