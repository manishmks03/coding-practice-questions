/**
 * @param {string} s
 * @return {number}
 */

//  https://leetcode.com/problems/longest-substring-without-repeating-characters/

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

lengthOfLongestSubstring("pwwkeaswwpoiuytre");
