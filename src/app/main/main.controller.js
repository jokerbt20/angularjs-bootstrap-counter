(function() {
  'use strict';

  angular
    .module('vladeProjects')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.count = 1;

    vm.test= function(){
     alert(vm.count);
    };
    
  }
})();
