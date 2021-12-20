/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 循环此链表, 找到指定节点后删除此节点
 */
var deleteNode = function (head, val) {
  let p = head
  if (p.val === val) {
    return p.next
  }
  while (p && p.next) {
    if (p.next && p.next.val === val) {
      p.next = p.next.next
    }
    p = p.next
  }
  return head
};