/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * dfs 需要一个辅助函数用来计算二叉树的深度
 */
var isBalanced = function (root) {
  // 计算当前节点下的最大深度
  const depth = (root) => {
    if (!root) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1
  }
  if (!root) return true;
  // 如果左子树深度与右子树深度大于1, 则返回false 
  if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false;
  // 否则继续递归到下一节点
  return isBalanced(root.left) && isBalanced(root.right);
};

