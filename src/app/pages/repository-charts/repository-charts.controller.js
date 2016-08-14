/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .controller('RepositoryChartsController', repositoryChartsController);

  /**
   * Repository Charts Controller
   * @param $rootScope
   * @param $stateParams
   * @param repositoryService
   * @param issueService
   * @param underscore
   */
  function repositoryChartsController($rootScope, $stateParams, repositoryService, issueService, underscore) {
    var vm = this;

    init();

    ////////////////////////////////////////////////////////////////////////////

    function init() {
      if($stateParams.q) {
        vm.repoName = $stateParams.q;
        getRepositoryStats($stateParams.q);
      }
    }

    /**
     * Get repository stats by name
     * @param query
     */
    function getRepositoryStats(query) {
      $rootScope.$broadcast('loading', {active: true});
      repositoryService.getRepositories("repo:" + query)
        .then(function(res1) {
          issueService.getIssues("repo:" + query)
            .then(function(res2) {
              vm.repository = res1.items[0];
              vm.issues = res2.items;
              setChartData(vm.repository, vm.issues);
            });
        })
        .catch(function(err) {
          console.log(err);
        })
        .finally(function() {
          $rootScope.$broadcast('loading', {active: false});
        });
    }

    /**
     * Set the necessary data to show it in the charts
     * @param repository
     */
    function setChartData(repository, issues) {
      vm.repo = {
        labels: ['Stargazers', 'Forks', 'Watchers'],
        data: [repository.stargazers, repository.forks, repository.watchers]
      };

      var issueData = underscore.countBy(issues, function(issue) {
        return issue.state === 'open' ? 'Open': 'Closed';
      });

      vm.issues =  {
        labels: Object.keys(issueData),
        data: Object.keys(issueData).map(function(k){return issueData[k]})
      }
    }
  }
}());