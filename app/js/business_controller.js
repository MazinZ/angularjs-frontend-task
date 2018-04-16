(function() {
  angular
      .module('fetchrev')
      .controller('BusinessController', BusinessController);

  BusinessController.$inject = ['BusinessService'];

  function BusinessController(BusinessService) {
    const vm = this;
    vm.filter = filter;

    function filter() {
      
    }

  }
})();
  