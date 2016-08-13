/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .directive('issue', issue);

  function issue() {

    return {
      restrict: 'A',
      scope: {
        issue: '='
      },
      templateUrl: 'src/app/issue/issue.directive.html'
    };
  }
}());