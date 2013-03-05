/// <reference path="../Algorithms/Calculator.js" />

describe("Calculator", function () {
    var calc = new Calculator();

    it("returns a number when called with positive number", function () {
        var num = calc.factorial(4);
        
        expect(num).toBeGreaterThan(0);
    });

    it("should throw when given a negative number", function () {
        var delegate = function () {
            calc.factorial(-1);
        };

        expect(delegate).toThrow();
    });

    it("should give expected value for input 10", function () {
        var num = calc.factorial(10);

        expect(num).toEqual(3628800);
    });
});