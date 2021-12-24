/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 * 使用中序遍历, 用head先存头指针, 用pre来在遍历过程中相互指向, 最后记得收尾互联
 */
var treeToDoublyList = function (root) {
  if (!root) return
  // 用来标记头节点
  let head = null
  // 递归时候节点
  let pre = null

  const dfs = (root) => {
    if (!root) return
    dfs(root.left)
    // 如果当前节点没有说明这是头节点
    if (!pre) {
      head = root
    } else {
      // 相互指向
      pre.right = root
      root.left = pre
    }
    pre = root
    dfs(root.right)
  }
  dfs(root)
  // 此时pre已经到了尾节点, 需要头尾节点互连
  head.left = pre
  pre.right = head
  return head
};