/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversedNum = parseInt(x.toString().split("").reverse().join(""));
  if (x && (reversedNum > Math.pow(2, 31) || reversedNum < -Math.pow(2, 31))) {
    return 0;
  }

  return x < 0 ? -parseInt(reversedNum) : parseInt(reversedNum);
};

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));
// console.log(reverse(0));
// console.log(reverse(1534236469));
console.log(-2147483648);
