/// <reference path="../Algorithms/Calculator.js" />

var calculator;
module("Calculator tests", {
    setup: function () {
        calculator = new Calculator();
    }
});
test("Factorial with positive number completes", function () {
    var num = calculator.factorial(4);

    ok(num > 0);
});

test("Factorial of negative number should throw", function () {
    var delegate = function () {
        calculator.factorial(-1);
    };

    raises(delegate);
});

test("Factorial with input 10 should give expected result", function () {
    var num = calculator.factorial(10);

    equal(num, 3628800);
});