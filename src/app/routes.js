/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /404
    $urlRouterProvider.otherwise('/repositories');

    // Now set up the states
    $stateProvider
      .state('repositories', {
        url: '/repositories?q',
        templateUrl: 'src/app/repository/repositories.html',
        controller: 'RepositoryController',
        controllerAs: 'vm'
      })
      .state('issues', {
        url: '/issues?q',
        templateUrl: 'src/app/issue/issues.html',
        controller: 'IssueController',
        controllerAs: 'vm'
      })
      .state('charts', {
        url: '/charts',
        templateUrl: 'src/app/charts/charts.html',
        controller: 'ChartController',
        controllerAs: 'vm'
      })
  }
}());