/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher').factory('underscore', underscore);

  /**
   * Underscore factory set up
   * @param $window
   * @returns underscore library
   */
  function underscore($window) {
    return $window._; // assumes underscore has already been loaded on the page
  }
}());