/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 *  前序遍历第一个一定是根节点, 根据第一个节点去中序遍历找到其索引, 左边的就是左子树, 右边的是右子树, 以此递归 
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  //  第一个一定是根节点
  const root = preorder[0]
  const rootIndex = inorder.indexOf(root)
  // 中序 - 左子树
  const leftInorder = inorder.slice(0, rootIndex)
  // 前序 - 左子树  除了第一个 
  const leftPreorder = preorder.slice(1, rootIndex + 1)
  // 中序 - 右子树
  const rightInorder = inorder.slice(rootIndex + 1)
  // 前序 - 右子树
  const rightPreorder = preorder.slice(rootIndex + 1)

  // 新建一个节点
  const node = new TreeNode(root)
  node.left = buildTree(leftPreorder, leftInorder)
  node.right = buildTree(rightPreorder, rightInorder)
  return node
};