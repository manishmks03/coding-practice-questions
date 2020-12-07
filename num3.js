var longestPalindrome = function (s) {
  // cbbd
  // dbbc
  if (s.length === 1) return s;
  if (s.length === 2 && s[0] === s[1]) return s;
  if (s.length === 2 && s[0] !== s[1]) return s[0];
};

const s = "cbbd";
console.log(longestPalindrome(s));
