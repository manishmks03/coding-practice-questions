/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  const phoneToLetterMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };

  const getAllCombinations = (arr1, arr2) => {
    const res = [];
    if (arr1.length && !arr2.length) return arr1;
    if (arr2.length && !arr1.length) return arr2;

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        res.push(arr1[i] + arr2[j]);
      }
    }
    return res;
  };

  let num = digits.toString().split("");
  const totalDigits = num.length;

  if (totalDigits === 1) return phoneToLetterMap[num[0]];

  num = num.map(d => phoneToLetterMap[d]);

  let resArr = [];
  num.forEach((d, index) => {
    resArr = getAllCombinations(resArr, d);
  });

  return resArr;
};

// 234

console.log(letterCombinations(234));
// console.log(letterCombinations(2));
// console.log(letterCombinations(23));
// console.log(letterCombinations(23));
// console.log(letterCombinations(23));
