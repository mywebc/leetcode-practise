/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 广度优先遍历, 使用队列先进先出的特点
 */
var levelOrder = function (root) {
  if (!root) return []
  const res = []
  // 默认第一个先入队
  const queue = [root]
  while (queue.length) {
    // 第一个node先出来
    const node = queue.shift()
    res.push(node.val)
    // 再次依次左右节点入队
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return res
};