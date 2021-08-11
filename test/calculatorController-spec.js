describe("CalculatorCtrl", function () {
  let rootscope, scope, controller, calculatorService;
  beforeEach(function () {
    module("calculatorApp");
    inject(function ($injector, CalculatorService) {
      rootscope = $injector.get("$rootScope");
      scope = rootscope.$new();
      controller = $injector.get("$controller")("CalculatorCtrl", {
        $scope: scope,
      });
      calculatorService = CalculatorService;
    });
  });

  it("should contain calculate method", function () {
    expect(angular.isFunction(scope.calculate)).toEqual(true);
  });

  let response = {
    _id: "611361db459a1840f846d997",
    input1: "7",
    input2: "4",
    result: "28",
    __v: 0,
  };
  it("calculate() - call the save service with success response", function () {
    spyOn(calculatorService, "saveData").and.callFake(function () {
      return {
        then: function (resolve) {
          return resolve(response);
        },
      };
    });
    scope.calculate();
  });

  it("calculate() - call the save service with empty response", function (callback) {
    spyOn(calculatorService, "saveData").and.callFake(function () {
      return {
        then: function (resolve) {
          return resolve([]);
        },
      };
    });
    scope.calculate();
  });

  it("getData() - call the getData service with success response", function (callback) {
    spyOn(calculatorService, "getData").and.callFake(function () {
      return {
        then: function (resolve) {
          return resolve(response);
        },
      };
    });
  });

  it("getData() - call the getData service with empty response", function (callback) {
    spyOn(calculatorService, "getData").and.callFake(function () {
      return {
        then: function (resolve) {
          return resolve([]);
        },
      };
    });
  });
});
