/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 1. 利用双指针先反转链表, 按顺序找到该节点, 再次反转链表返回
 * 2. 利用双指针, 快慢指针配合, 快指针先走k步, 然后快慢指针同步知道快指针null, 返回慢指针
 */
var getKthFromEnd1 = function (head, k) {
  const getReserveListNode = reserveListNode(head)
  let count = 0
  let p = getReserveListNode
  while (p) {
    count++
    if (count >= k) {
      p.next = null
    }
    p = p.next
  }
  return reserveListNode(getReserveListNode)
};

var getKthFromEnd = function (head, k) {
  // 双指针
  let fast = head
  while (k--) {
    fast = fast.next
  }
  let slow = head
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
};

const reserveListNode = (head) => {
  let p = head
  let pre = null
  while (p) {
    const tmp = p.next
    p.next = pre
    // 向后移动一位
    pre = p
    p = tmp
  }
  return pre
}