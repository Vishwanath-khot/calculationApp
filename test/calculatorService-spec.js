describe("CalculatorService", function () {
  let httpBackend, calculatorService;
  beforeEach(function () {
    module("calculatorApp");
    inject(function (CalculatorService, $injector) {
      calculatorService = CalculatorService;
      httpBackend = $injector.get("$httpBackend");
    });
  });

  it("should contain getData and saveData methods", function () {
    expect(angular.isFunction(calculatorService.getData)).toEqual(true);
    expect(angular.isFunction(calculatorService.saveData)).toEqual(true);
  });

  var mockResponse = {
    data: { success: true, message: "Yeah!" },
  };

  it("getData method: call with success response", function () {
    let returnedVal;
    httpBackend
      .expectGET("http://localhost:3000/api/getData")
      .respond(mockResponse);
    calculatorService.getData().then(function (response) {
      returnedVal = response.data;
    });
    httpBackend.flush();
    expect(returnedVal).toEqual(mockResponse);
  });

  it("getData method: call with empty response", function () {
    let returnedVal;
    httpBackend.expectGET("http://localhost:3000/api/getData").respond([]);
    calculatorService.getData().then(function (response) {
      returnedVal = response.data;
    });
    httpBackend.flush();
    expect(returnedVal).toEqual([]);
  });
  const ctrl = {
    calculator: {
      data: "xyz",
    },
  };

  it("saveData method: call with sucess", function () {

    httpBackend
      .expectPOST("http://localhost:3000/api/saveData")
      .respond(mockResponse);
    calculatorService.saveData(ctrl).then(function (response) {
      returnedVal = response.data;
    });
    httpBackend.flush();
    expect(returnedVal).toEqual(mockResponse);
  });


  it("saveData method: call with null response", function () {
    httpBackend
      .expectPOST("http://localhost:3000/api/saveData")
      .respond([]);
    calculatorService.saveData(ctrl).then(function (response) {
      returnedVal = response.data;
    });
    httpBackend.flush();
    expect(returnedVal).toEqual([]);
  });
});
