/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 搜索与回溯法
 * 依旧是递归,满足以下三种情况就是对称的
 * A.val === B.val
 * A.left.val === R.right.val
 * A.right.val === R.left.val
 */
var isSymmetric = function (root) {
    if (!root) return true
    return isSame(root.left, root.right)
};

function isSame(A, B) {
    // 如果都是最后遍历完了返回true
    if (A === null && B === null) return true
    // 只要有其中一个没完， 另一个完了就是false
    if ((A === null && B !== null) || (A !== null && B === null)) return false
    // 如果相等继续递归
    return A.val === B.val && isSame(A.left, B.right) && isSame(A.right, B.left)
}