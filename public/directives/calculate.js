calculatorApp.directive("calculate", function () {
    return {
      restrict: "E",
      replace: true,
      template: "<div>{{calculator.result}}</div>",
      link: function ($scope, element, attrs) {
        $scope.onCalculate = function () {
          $scope.calculator.result =
            $scope.calculator.input1 * $scope.calculator.input2;
          $scope.calculate($scope.calculator);
        };
      },
    };
  });