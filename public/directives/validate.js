calculatorApp.directive("validate", function () {
    return {
      require: "ngModel",
      link: function (scope, element, attrs, control) {
        element.bind("input", function () {
          scope.$watch("calculator", function (input) {
            if (
              isNaN(input.input1) ||
              isNaN(input.input2) ||
              Number(input.input1) < 0 ||
              Number(input.input2) < 0
            ) {
              scope.calculatorForm.$invalid = true;
            } else {
              scope.calculatorForm.$invalid = false;
            }
            if (!/^\d+$/.test(input[attrs.id])) {
              element.addClass("red");
              scope.calculatorForm[attrs.id].$invalid = true;
            } else {
              element.removeClass("red");
            }
          });
        });
      },
    };
  });