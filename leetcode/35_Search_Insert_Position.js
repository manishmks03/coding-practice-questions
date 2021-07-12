/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  const currentIndex = nums.length / 2;
  if (nums.length === 1 && nums[0] === target) {
    return 0;
  }
  console.log("currentIndex : ", currentIndex);
  if (nums[currentIndex] === target) return currentIndex;

  if (target < nums[currentIndex]) {
    const newArr = nums.slice(0, currentIndex);
    console.log("-----1----", newArr, currentIndex);
    return currentIndex - searchInsert(newArr, target);
  } else if (target > nums[currentIndex]) {
    const newArr = nums.slice(currentIndex, nums.length);
    console.log("-----2----", newArr);
    return currentIndex + searchInsert(newArr, target);
  }
  return 0;
};

console.log(searchInsert([1, 3, 5, 6, 9], 6));
// console.log(searchInsert([1, 3, 5, 6], 6));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 0));
// console.log(searchInsert([1], 0));
