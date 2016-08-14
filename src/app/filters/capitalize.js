/**
 * Created by ederbodelon on 14/08/2016.
 */

//Unused, but there is
(function () {
  angular.module('github-repo-searcher')
    .filter('capitalize', capitalize);

  /**
   * Capitalize filter
   * @returns filter
   */
  function capitalize() {
    return function (s) {
      return (angular.isString(s) && s.length > 0) ? s[0].toUpperCase() + s.substr(1).toLowerCase() : s;
    }
  }
}());