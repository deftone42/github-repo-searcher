/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .directive('repository', repository);

  /**
   * Repository Directive
   * @param $state
   * @returns directive
   */
  function repository($state) {

    return {
      restrict: 'A',
      templateUrl: 'src/app/models/repository/repository.directive.html',
      scope: {
        repository: '='
      },
      link: link
    };

    function link(scope) {
      scope.seeIssues = seeIssues;

      ////////////////////////////////

      /**
       * Redirect to the repository-issues page
       */
      function seeIssues() {
        $state.go('repo-issues', {q: scope.repository.fullName});
      }
    }
  }
}());