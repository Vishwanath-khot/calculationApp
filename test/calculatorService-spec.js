describe("CalculatorService", function () {
  let httpBackend, calculatorService;
  beforeEach(function () {
    module("calculatorApp");
    inject(function (CalculatorService, $injector) {
      calculatorService = CalculatorService;
      httpBackend = $injector.get("$httpBackend");
    });
  });

  it("should contain calculate method", function () {
    expect(angular.isFunction(calculatorService.getData)).toEqual(true);
    expect(angular.isFunction(calculatorService.saveData)).toEqual(true);
  });
  var mockResponse = {
    data: { success: true, message: "Yeah!" },
  };

  // it("getData method: call", function () {
  //   httpBackend
  //     .expectGET("http://localhost:3000/api/getData")
  //     .respond(Promise.resolve(mockResponse));
  //   calculatorService.getData();
  //   httpBackend.flush();
  // });

  // it("saveData method: call", function () {
  //    let ctrl = jasmine.createSpyObj('ctrl.calculator', {'calculator': "vis"});
  //   httpBackend
  //     .expectGET("http://localhost:3000/api/getData")
  //     .respond(Promise.resolve(mockResponse));
  //   calculatorService.saveData();
  //   httpBackend.flush();
  // });
});
