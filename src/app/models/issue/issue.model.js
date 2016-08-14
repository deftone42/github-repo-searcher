/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .factory('Issue', issue);

  /**
   * Issue model
   * @returns {Issue}
   */
  function issue() {

    /**
     * Constructor, with class Repository
     */
    function Issue(title, number, url, user, state, comments) {
      // Public properties, assigned to the instance ('this')
      this.title = title;
      this.number = number;
      this.url = url;
      this.user = user;
      this.state = state;
      this.comments = comments;
    }

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Issue.build = function (data) {
      return new Issue(
        data.title,
        data.number,
        data.html_url,
        data.user.login,
        data.state,
        data.comments
      );
    };

    /**
     * Return the constructor function
     */
    return Issue;
  }
}());