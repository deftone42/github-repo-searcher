/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .directive('repository', repository);

  function repository($state) {

    return {
      restrict: 'A',
      templateUrl: 'src/app/repository/repository.directive.html',
      scope: {
        repository: '='
      },
      link: link
    };

    function link(scope) {
      scope.seeIssues = seeIssues;

      ////////////////////////////////

      function seeIssues() {
        $state.go('issues', {q: "repo:" + scope.repository.fullName});
      }
    }
  }
}());