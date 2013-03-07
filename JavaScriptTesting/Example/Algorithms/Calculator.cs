using System;

namespace Algorithms
{
    public class Calculator
    {
        public int Factorial(int num)
        {
            if (num < 0)
                throw new ArgumentException("Cannot computer factorial of negative number");

            if (num == 0)
                return 1;

            return num*Factorial(num - 1);
        }
    }
}
