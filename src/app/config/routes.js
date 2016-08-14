/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .config(routes);

  /**
   * Set the routes configuration
   * @param $stateProvider
   * @param $urlRouterProvider
   */
  function routes($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /404
    $urlRouterProvider.otherwise('/repositories');

    // Now set up the states
    $stateProvider
      .state('repositories', {
        url: '/repositories?q',
        templateUrl: 'src/app/pages/repositories/repositories.html',
        controller: 'RepositoryController',
        controllerAs: 'vm',
        resolve: {
          menuNav: ['leftPanelService', function(leftPanelService) {
            leftPanelService.setMenuNav(1);
          }]
        }
      })
      .state('issues', {
        url: '/issues?q',
        templateUrl: 'src/app/pages/issues/issues.html',
        controller: 'IssueController',
        controllerAs: 'vm',
        resolve: {
          menuNav: ['leftPanelService', function(leftPanelService) {
            leftPanelService.setMenuNav(1);
          }]
        }
      })
      .state('repo-issues', {
        url: '/repository/:q/issues',
        templateUrl: 'src/app/pages/repository-issues/repository-issues.html',
        controller: 'RepositoryIssuesController',
        controllerAs: 'vm',
        resolve: {
          issues: ['leftPanelService', function(leftPanelService) {
            leftPanelService.setMenuNav(2);
          }]
        }
      })
      .state('repo-charts', {
        url: '/repository/:q/charts',
        templateUrl: 'src/app/pages/repository-charts/repository-charts.html',
        controller: 'RepositoryChartsController',
        controllerAs: 'vm',
        resolve: {
          menuNav: ['leftPanelService', function(leftPanelService) {
            leftPanelService.setMenuNav(2);
          }]
        }
      })
  }
}());