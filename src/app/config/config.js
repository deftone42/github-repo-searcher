/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .config(config);

  function config(ChartJsProvider) {
    ChartJsProvider.setOptions({
      colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
  }
}());