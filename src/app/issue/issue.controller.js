/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .controller('IssueController', issueController);

  function issueController($rootScope, $stateParams, issueService) {
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
      issueService.getIssues(query)
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