/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .service('issueService', issueService);

  function issueService($q, Issue, apiFactory, underscore) {
    var resource = apiFactory.build('issues').getResource();

    var service = {};
    service.getIssues = getIssues;

    return service;

    //////////////////////////////////////////////////////////////////

    function getIssues(qParam) {
      var params = {
        q: qParam
      };

      var deferred = $q.defer();

      resource.get(params).$promise
        .then(function(res) {
          deferred.resolve(transformResponse(res));
        })
        .catch(function(err) {
          deferred.reject(transformResponse(err));
        });

      return deferred.promise;
    }

    function transformResponse(response) {
      var issue,
        results = 0,
        items = [],
        resolved = false;

      if(response.$resolved) {
        results = response.total_count;
        resolved = response.$resolved;
        items = underscore.map(response.items, function(item){
          issue = Issue.build(item);
          return issue;
        });
      }

      return {
        resolved: resolved,
        results: results,
        items: items
      }
    }
  }
}());