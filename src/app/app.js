(function () {
  /**
   * Github Repository Searcher App
   */
  angular.module('github-repo-searcher', [
    'ngTouch',
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'ngResource',
    'chart.js'
  ]).run(run);

  function run($rootScope) {
    $rootScope.title = 'Github Repo Searcher'
  }
}());