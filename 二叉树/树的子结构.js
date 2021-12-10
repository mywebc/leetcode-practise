/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 *  搜索与回溯法
 * DFS，首先遍历二叉树A的每一个节点， 然后调用比较函数比较
 */
var isSubStructure = function (A, B) {
    if (A === null || B === null) return false
    if (A.val === B.val) {
        const sameFlag = isSame(A, B)
        // 如果sameFlag 为true的话就不用往下执行了
        if (sameFlag) {
            return sameFlag
        }
    }
    // 否则递归查找节点, 这里使用 ||, 意思只要有一个true就不执行了（短路原理）
    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

// 判断节点是否相同
function isSame(A, B) {
    // 如果B节点结束，A没结束说明,A包含了B， 返回true
    if (B === null) {
        return true
    }
    // 如果A节点结束了， B节点没结束， 说明不包含， 返回false
    if (A === null && B !== null) {
        return false
    }
    // 如果当前节点的值不相等， 返回false
    if (A.val !== B.val) {
        return false
    }
    // 递归调用直到遍历完B树 这里使用&&， 表示如果有一个为false就不会继续执行， （短路原理）
    return isSame(A.left, B.left) && isSame(A.right, B.right)
}