var longestPalindrome = function (s) {
  if (!s) return null;
  if (s.length === 1) return s;

  function isPallindrome(string) {
    if (string.length === 1) return s;
    let result = true;
    const length = string.length;
    for (let index = 0; index < length; index++) {
      const element = string[index];
      if (element !== string[length - 1 - index]) {
        result = false;
        break;
      }
    }
    return result ? string : "";
  }

  let myPalindrome = s[0];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const string = s.slice(i, j + 1);
      const validPalindrome = isPallindrome(string);

      if (validPalindrome && myPalindrome.length < string.length) {
        myPalindrome = string;
      }
    }
  }
  return myPalindrome.length;
};

longestPalindrome(s);
