/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .controller('IssueController', issueController);

  function issueController($rootScope, $state, $stateParams, issueService) {
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