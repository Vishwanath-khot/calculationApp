describe("validate", function () {
  let rootscope, scope, compile;
  beforeEach(function () {
    module("validate");
    inject(function ($injector) {
      rootscope = $injector.get("$rootScope");
      scope = rootscope.$new();
      compile = $injector.get('$compile');
    });
  });
});
