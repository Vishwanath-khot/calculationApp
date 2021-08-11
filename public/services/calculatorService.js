calculatorApp.factory("CalculatorService", [
    "$http",
    function ($http) {
      var urlBase = "http://localhost:3000/api";
      var CalculatorService = {};
  
      CalculatorService.getData = function () {
        return $http.get(urlBase + "/getData");
      };
  
      CalculatorService.saveData = function (ctrl) {
        let calRequest = ctrl.calculator;
        return $http.post(urlBase + "/saveData", calRequest);
      };
  
      return CalculatorService;
    },
  ]);