/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return root.val;
  }
  let maxSum = root.val;
  if (root.right && !root.left) {
    return root.val + maxPathSum(root.right);
  }
  if (!root.right && root.left) {
    return root.val + maxPathSum(root.left);
  }

  return root.val + maxPathSum(root.left) + maxPathSum(root.right);
};

for (let i = 0; index < array.length; index++) {
  const element = array[i];
}
