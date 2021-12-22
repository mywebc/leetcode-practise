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
 * @param {number} target
 * @return {number[][]}
 * dfs
 */
var pathSum = function (root, target) {

  const res = []
  const dfs = (node, sum, path) => {
    if (!node) return
    // 判断是否到最后的叶子结点
    if (node.val === sum && !node.left && !node.right) {
      path.push(node.val)
      res.push(path)
      return
    }
    path.push(node.val)
    dfs(node.left, sum - node.val, path.slice())
    dfs(node.right, sum - node.val, path.slice())
  }
  dfs(root, target, [])

  console.log(res)
  return res
};