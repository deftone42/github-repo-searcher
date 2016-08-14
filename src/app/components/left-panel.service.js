/**
 * Created by ederbodelon on 13/08/2016.
 */

(function () {
  angular.module('github-repo-searcher')
    .service('leftPanelService', leftPanelService);

  /**
   * Left Panel Service
   * @returns service
   */
  function leftPanelService() {
    var menuNavList = {
      1: [{
        state: 'repositories',
        value: 'Repositories'
      }, {
        state: 'issues',
        value: 'Issues'
      }],
      2: [{
        state: 'repo-issues',
        value: 'Issues'
      },{
        state: 'repo-charts',
        value: 'Charts'
      }]
    };
    var menuNav = [];
    var service = {};
    service.getMenuNav = getMenuNav;
    service.setMenuNav = setMenuNav;

    return service;

    //////////////////////////////////////////////////////////////////

    /**
     * Set a menu list
     * @param pointer
     */
    function setMenuNav(pointer) {
      menuNav = menuNavList[pointer];
    }

    /**
     * Returns the current menu nav
     * @returns {Array}
     */
    function getMenuNav() {
      return menuNav;
    }
  }
}());