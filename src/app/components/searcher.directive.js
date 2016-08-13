/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .directive('searcher', searcher);

  function searcher() {

    return {
      restrict: 'E',
      templateUrl: 'src/app/components/searcher.directive.html',
      scope: {
        search: '='
      }
    };
  }
}());