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
 * BFS, 每一层判断下奇偶数
 */
var levelOrder = function (root) {
  if (!root) return []
  const queue = [root]
  const result = []
  while (queue.length) {
    const size = queue.length
    const tmp = []
    const resultL = result.length
    for (let k = 0; k < size; k++) {
      const node = queue.shift()
      // 这里push的时候注意奇数从前面添加, 偶数从后面添加
      if (resultL % 2 !== 0) {
        tmp.unshift(node.val)
      } else {
        tmp.push(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    result.push(tmp)
  }
  return result
};