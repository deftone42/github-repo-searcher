/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .directive('issue', issue);

  /**
   * Issue directive
   * @returns Issue directive
   */
  function issue() {

    return {
      restrict: 'A',
      scope: {
        issue: '='
      },
      templateUrl: 'src/app/models/issue/issue.directive.html'
    };
  }
}());