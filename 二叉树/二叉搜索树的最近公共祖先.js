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
 * 注意是二叉搜索树, 其特点就是当前节点永远大于左子树, 小于右子树, 并且没有重复的数字
 * 如果当前节点的值都大于两个节点的值, 说明qp在当前节点左边 root = root.left
 * 如果当前节点的值都小于两个节点的值, 说明qp在当前节点右边 root = root.right
 * 如果当前节点都不满足, 说明这个节点就是他们开始分叉的公共节点, 返回即可
 */
var lowestCommonAncestor2 = function (root, p, q) {
  if (!root) return null
  if (q.val === p.val) return q
  while (root) {
      if (root.val < p.val && root.val < q.val) {
          root = root.right
      }
      if (root.val > p.val && root.val > q.val) {
          root = root.left
      } else {
          return root
      }
  }
};
// 这一题和二叉树的最近公共祖先一样思路
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