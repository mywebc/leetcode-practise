/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 两个链表都遍历, 定一个虚拟节点, 哪个链表小就指向哪个, 最后当有一个链表为null时,另一个链表直接拼接在后面返回
 */
var mergeTwoLists = function (l1, l2) {
  const head = new ListNode(0)
  let p = head
  let [p1, p2] = [l1, l2]
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }
  p.next = p1 ? p1 : p2
  return head.next
};