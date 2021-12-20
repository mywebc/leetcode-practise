/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 双指针
 * 123       m  1 2 3 4 5 7 2 3
 * 45723     n  4 5 7 2 3 1 2 3
 * a + c / b + c
 * a + c + b + c
 * b + c + a + c
 * 如果长度相等一次循环就好, 如果长度不相等, 两次循环, 最后一定会相遇到公共点(如果有的话)
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let [pA, pB] = [headA, headB]
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
};