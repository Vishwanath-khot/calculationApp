describe("CalculatorCtrl", function () {
  let rootscope, scope, controller, calculatorService;
  let response = {
    _id: "611361db459a1840f846d997",
    input1: "7",
    input2: "4",
    result: "28",
    status:200,
    __v: 0,
  };
  beforeEach(function () {
    module("calculatorApp");
    inject(function ($injector, CalculatorService) {
      rootscope = $injector.get("$rootScope");
      scope = rootscope.$new();
      calculatorService = CalculatorService;


      spyOn(calculatorService, "getData").and.callFake(function () {
        return {
          then: function (resolve) {
            return resolve(response);
          }
        };
      });

      controller = $injector.get("$controller")("CalculatorCtrl", {
        $scope: scope
      });
      
      
    });
  });

  it("should contain calculate method", function () {
    expect(calculatorService.getData).toHaveBeenCalled();
    expect(angular.isFunction(scope.calculate)).toEqual(true);
    
  });

  
  it("calculate() - call the save service with success response", function () {
    spyOn(calculatorService, "saveData").and.callFake(function () {
      return {
        then: function (resolve) {
          return resolve(response);
        }
      };
    });
    scope.calculate();
    expect(calculatorService.saveData).toHaveBeenCalled();
  });


});
