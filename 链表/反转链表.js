/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 双指针, 每次循环实现局部反转
 * null -> 1 -> 2 -> 3
 * pre    curr
 */
var reverseList = function (head) {
  // 当前节点
  let curr = head
  // 当前节点前一节点
  let pre = null
  while (curr) {
      // 先保存curr指针指向的下一个节点
      let temp = curr.next;
      // 再将curr指针的next指向上一个节点(pre)
      curr.next = pre
      // pre移到curr的位置
      pre = curr
      // curr向后移动一位
      curr = temp
  }
  return pre
};
