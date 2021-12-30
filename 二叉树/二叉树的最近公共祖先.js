/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 如果当前为最后一个节点/当前节点等于p或者q
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  //  左子树没有去右子树寻找
  if (!left) return right
  //  右子树没有去左子树寻找
  if (!right) return left
  // 如果在两边, 返回当前节点
  return root
};