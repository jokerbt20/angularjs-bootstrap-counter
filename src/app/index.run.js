(function() {
  'use strict';

  angular
    .module('vladeProjects')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
