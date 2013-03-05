using NUnit.Framework;

namespace Algorithms.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator _calculator;

        [SetUp]
        public void Setup()
        {
            _calculator = new Calculator();
        }

        [Test]
        public void Factorial_WithPositiveNumber_Completes()
        {
            var num = _calculator.Factorial(4);

            Assert.That(num, Is.GreaterThan(0));
        }

        [Test]
        public void Factorial_WithNegativeNumber_Throws()
        {
            TestDelegate testDelegate = () => _calculator.Factorial(-1);
            Assert.That(testDelegate, Throws.ArgumentException);
        }

        [Test]
        public void Factorial_With10_ReturnsExpectedValue()
        {
            var num = _calculator.Factorial(10);

            Assert.That(num, Is.EqualTo(3628800));
        }
    }
}
