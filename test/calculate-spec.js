describe("calculate", function () {
    let rootscope, scope, compile,el,body,  html = '<button>calculate</button>';
    beforeEach(function () {
      module("calculate");
      inject(function ($injector) {
        rootscope = $injector.get("$rootScope");
        scope = rootscope.$new();
        compile = $injector.get('$compile');
        body = $document,
        el.compile(angular.element(html))(scope);
       

        body.append(el);
        rootscope.digest();
      });


      it("should contain calculate method", function () {
       el.click();
       console.log(scope);
      });



      
    });




  });
  