/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * k 表示第几大的节点值, 第一大就是倒数第一个, 第二大就是倒数第二个
 * 这是一个二叉搜索树,我们可以使用中序遍历, 这里我们可以使用逆中序遍历
 */
var kthLargest = function (root, k) {
  const res = []
  const dfs = (root) => {
    if (!root) return
    dfs(root.right)
    // 这边可以优化,每次到这儿k-1, 直到k===0, 返回此时节点的值
    res.push(root.val)
    dfs(root.left)
  }
  dfs(root)
  return res[k - 1]
};