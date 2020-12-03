/**
 * @param {string} s
 * @return {number}
 */

//  https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  let res = {
    test: {},
    str: "",
    length: 0
  };
  let len1 = 0;
  let str1 = "";
  for (let i = 0; i < s.length - 1; i++) {
    let len = 1;
    let str = s[i];
    let test = {
      [s[i]]: 1
    };
    for (let j = i + 1; j < s.length; j++) {
      if (!test[s[j]]) {
        len += 1;
        str = str + s[j];
        test[s[j]] = 1;
      } else {
        break;
      }
    }
    if (len1 < len) {
      len1 = len;
      str1 = str;
    }
  }
  return len1;
};

console.log(lengthOfLongestSubstring("pwwkeaswwpoiuytre"));
