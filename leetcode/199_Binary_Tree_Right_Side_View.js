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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  let level = 0;
  let nodesAtLevels = [];

  const getRightMostNodes = (root, level) => {
    let arr = [];
    if (root) {
      if (nodesAtLevels[level]) {
        nodesAtLevels[level].push(root.val);
      } else {
        nodesAtLevels[level] = [root.val];
      }
    }
    if (root.left) {
      getRightMostNodes(root.left, level + 1);
    }
    if (root.right) {
      getRightMostNodes(root.right, level + 1);
    }
  };

  getRightMostNodes(root, level);
  nodesAtLevels = nodesAtLevels.map(d =>
    d && d.length ? d[d.length - 1] : null
  );

  return nodesAtLevels;
};
