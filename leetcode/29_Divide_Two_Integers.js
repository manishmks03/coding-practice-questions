/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let ans = 0;
  let newDividend = Math.abs(dividend);
  let temp = newDividend;
  let newDivisor = Math.abs(divisor);

  if (dividend === -2147483648 && divisor == -1) {
    return 2147483647;
  }

  if (divisor === 1) return dividend;

  while (temp >= newDivisor) {
    ans += 1;
    temp = temp - newDivisor;
  }

  if (divisor < 0 && dividend < 0) return ans;

  if (divisor < 0 || dividend < 0) return -ans;

  return ans;
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(-1, 1));
