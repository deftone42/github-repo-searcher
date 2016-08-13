/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .service('repositoryService', repositoryService);

  function repositoryService($q, Repository, apiFactory, underscore) {
    var resource = apiFactory.build('repositories').getResource();

    var service = {};
    service.getRepositories = getRepositories;

    return service;

    //////////////////////////////////////////////////////////////////

    function getRepositories(qParam) {
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
      var repository,
          results = 0,
          items = [],
          resolved = false;

      if(response.$resolved) {
        results = response.total_count;
        resolved = response.$resolved;
        items = underscore.map(response.items, function(item){
          repository = Repository.build(item);
          return repository;
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