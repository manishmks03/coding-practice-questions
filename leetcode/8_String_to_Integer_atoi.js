/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const parsed = parseInt(s);
  if (parsed && parsed < -Math.pow(2, 31)) return -Math.pow(2, 31);
  else if (parsed && parsed > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  else if (parsed) return parsed;
  return 0;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("21474836460"));
// console.log(myAtoi("2147483648"));
// "21474836460";
