/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 广度优先, 加每一层的循环
 */
var levelOrder = function (root) {
  if (!root) return []
  const queue = [root]
  const res = []
  while (queue.length) {
    let tmp = []
    // 每一层循环, 注意queue.length的长度一直在变
    const size = queue.length
    for (let k = 0; k < size; k++) {
      const node = queue.shift()
      tmp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(tmp)
  }
  return res
};