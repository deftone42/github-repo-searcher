/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .factory('apiFactory', apiFactory);

  /**
   * Api Factory Class
   * @param $resource
   * @returns {ApiFactory}
   */
  function apiFactory($resource) {
    var hostUrl = 'https://api.github.com/search/';

    /**
     * Constructor, with class Repository
     */
    function ApiFactory(endpoint) {
      // Public properties, assigned to the instance ('this')
      this.fullUrl = hostUrl + endpoint;
    }

    /**
     * Public method, assigned to prototype
     */
    ApiFactory.prototype.getResource = function getResource() {
      return $resource(this.fullUrl);
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    ApiFactory.build = function (endpoint) {
      return new ApiFactory(endpoint);
    };

    /**
     * Return the constructor function
     */
    return ApiFactory;
  }
}());