/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .factory('Repository', repository);

  /**
   * Repository model
   * @returns {Repository}
   */
  function repository() {

    /**
     * Constructor, with class Repository
     */
    function Repository(fullName, description, url, stargazers, forks,
                        openIssues, watchers, htmlUrl) {
      // Public properties, assigned to the instance ('this')
      this.fullName = fullName;
      this.description = description;
      this.url = url;
      this.stargazers = stargazers;
      this.forks = forks;
      this.openIssues = openIssues;
      this.watchers = watchers;
      this.htmlUrl = htmlUrl;
    }

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Repository.build = function (data) {
      return new Repository(
        data.full_name,
        data.description,
        data.url,
        data.stargazers_count,
        data.forks_count,
        data.open_issues_count,
        data.watchers_count,
        data.html_url
      );
    };

    /**
     * Return the constructor function
     */
    return Repository;
  }
}());