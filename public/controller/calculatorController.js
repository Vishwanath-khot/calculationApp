calculatorApp.controller("CalculatorCtrl", [
    "$scope",
    "CalculatorService",
    function ($scope, CalculatorService) {
      let ctrl = $scope;
      ctrl.calculator = {};


      ctrl.calculate = function () {
        CalculatorService.saveData(ctrl).then(function (res) {
        });
      };
  
      CalculatorService.getData().then(function (res) {
        if (res.status === 200) {
          if (res && res.data) {
            ctrl.calculatorResponse = res.data;
            ctrl.calculator = Object.assign({},res.data[res.data.length - 1]);
          }
        }
      });
    },
  ]);