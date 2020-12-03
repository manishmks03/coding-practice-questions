/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function (nums, target) {
  const hashMap = {};
  if (
    nums.length < 2 ||
    nums.length > Math.pow(10, 3) ||
    target > Math.pow(10, 9)
  ) {
    return null;
  }
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const toSearchPair = target - nums[i];
    if (hashMap[toSearchPair] && hashMap[toSearchPair] !== i) {
      return [i, hashMap[toSearchPair]];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
