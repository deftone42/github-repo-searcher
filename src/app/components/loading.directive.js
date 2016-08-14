/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .directive('loading', loading);

  /**
   * Loading directive
   * @returns loading directive
   */
  function loading() {

    return {
      restrict: 'E',
      templateUrl: 'src/app/components/loading.directive.html',
      link: link
    };

    function link($rootScope, element) {
      hideElement(element);

      $rootScope.$on('loading', function(event, args) {
        if(args.active) {
          showElement(element);
        } else {
          hideElement(element);
        }
      });
    }

    function hideElement(element) {
      element.css('display', 'none');
    }

    function showElement(element) {
      element.css('display', 'block');
    }

  }
}());