(function () {
  angular.module('github-repo-searcher', [
    'ngTouch',
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'ngResource'
  ]).run(function ($rootScope) {
    console.log('run');
  });
}());