/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s === "") return 0;

  let stack = [];
  let len = 0;
  //   let max = 0;

  for (let i = 0; i < s.length; i++) {
    const paren = s[i];
    console.log("---------Before----------", { stack, len, paren, i });

    if (paren === "(") {
      stack.push(paren);
      //   len += 1;
    } else if (paren === ")") {
      if (stack.length) {
        const popped = stack.pop();
        len += 2;
      } else {
        // if (len > max) {
        //   console.log("Here setting max and len");
        //   max = len;
        //   len = 0;
        //   stack = [];
        // }
      }
    }
    console.log("---------AFter----------", { stack, len, paren, i });
    console.log("-----");
  }

  return len;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("()(()"));
// console.log(longestValidParentheses(""));
// console.log(longestValidParentheses(""));

var isValidBST = function (root) {
  const validateBST = (node, minLeft, maxRight) => {
    if (node === null) return true;
    if (minLeft !== null && node.val <= minLeft) {
      return false;
    }
    if (maxRight !== null && node.val >= maxRight) {
      return false;
    }
    return (
      validateBST(node.left, minLeft, node.val) &&
      validateBST(node.right, node.val, maxRight)
    );
    // return validateBST(null, null, 0) && validateBST(-1, 0, 0);
  };
  return validateBST(root, null, null);
};
