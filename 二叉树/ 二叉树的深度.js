/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * dfs + bfs
 */
// bfs 存储每一层, 计数加一
var maxDepth2 = function (root) {
  if (!root) return 0
  let queue = [root]
  let num = 0
  while (queue.length > 0) {
    let temp = []
    for (let i = 0; i < queue.length; i++) {
      queue[i].left && temp.push(queue[i].left)
      queue[i].right && temp.push(queue[i].right)
    }
    // 存储每一层
    queue = temp
    num++
  }
  return num
};
// 使用DFS
var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}


