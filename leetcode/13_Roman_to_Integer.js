/**
 * @param {string} s
 * @return {number}
 */

const romanToIntMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var romanToInt = function (s) {
  let int = 0;
  s.split("").map((d, i) => {
    if (s[i] && s[i + 1] && romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
      int = int - romanToIntMap[s[i]];
    } else {
      int = int + romanToIntMap[s[i]];
    }
  });
  return int;
};

console.log(romanToInt("CMLII"));
console.log(romanToInt("IV"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));
