describe('Controller: business.controller', function() {

  let vm;

  beforeEach(module('fetchrev'));
  beforeEach(inject(function($controller) {
    vm = $controller('BusinessController', {}, {});
  }));

  describe('vm.filter', function() {
    beforeEach(function() {
      vm.businesses = [
        { name: 'Bizness', franchise: 'foo' },
        { name: 'A', franchise: 'foo' },
        { name: 'B', franchise: 'bar' },
        { name: 'C', franchise: 'baz' },
      ];
      vm.filtered = [...vm.businesses];
      vm.selected = 'foo';
    });

    it('should filter out unselected values', function() {
      expect(vm.filtered.length).toBe(4);
      vm.filter();
      expect(vm.filtered.length).toBe(2);
    });
  });

});