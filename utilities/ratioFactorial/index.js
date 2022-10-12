const factorialOfNumber = require("../utilities/factorial/index.js");
const ratioOfTwoNumbers = require("../utilities/ratio/index.js");

function ratioAndFactorial(num1, num2, num3) {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);
  const obj = {
    ratio: ratio,
    factorial: factorial,
  };
  return obj;
}
module.exports = ratioAndFactorial;
