/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  let triplets = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const trippie = [nums[i], nums[j], nums[k]];
          const sortedTriplet = trippie.sort((a, b) => (a > b ? 1 : -1));
          //   console.log("sortedTriplet", sortedTriplet, sortedTriplet.join(""));
          const trippieExist = triplets.find(
            d => d.join("") === sortedTriplet.join("")
          );
          //   if (sortedTriplet[0] === -15 && sortedTriplet[0] === 1) {
          //     console.log("Here");
          //   }
          if (!trippieExist) triplets.push(sortedTriplet);
          //   triplets.push(]);
        }
      }
    }
  }
  return triplets;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([]));
const test = [
  -13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14,
  13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5,
  -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8,
  -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4,
  2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10,
  -4, -15, -9, -1, -1, 3, 4, 1, 8, 1
];
console.log(threeSum(test));
