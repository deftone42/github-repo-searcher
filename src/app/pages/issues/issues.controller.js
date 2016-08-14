/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .controller('IssueController', issueController);

  /**
   * Issue Controller
   * @param $rootScope
   * @param $state
   * @param $stateParams
   * @param issueService
   */
  function issueController($rootScope, $state, $stateParams, issueService) {
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
     * Search issues by name
     * @param query
     */
    function search(query) {
      $rootScope.$broadcast('loading', {active: true});
      issueService.getIssues(query)
        .then(function(res) {
          vm.issues = res.items;
          vm.results = res.results;
        })
        .catch(function(err) {
          console.log(err);
        })
        .finally(function() {
          //We add the last search in the url to save it
          $state.transitionTo('issues', {q: query}, { notify: false });
          $rootScope.$broadcast('loading', {active: false});
        });
    }
  }
}());