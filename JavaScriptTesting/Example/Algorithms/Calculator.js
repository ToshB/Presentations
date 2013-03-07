function Calculator() {}
Calculator.prototype.factorial = function factorial(num) {
    if (num < 0)
        throw new Error("Cannot compute factorial of negative number");

    if (num == 0)
        return 1;
    
    return num * factorial(num - 1);
};