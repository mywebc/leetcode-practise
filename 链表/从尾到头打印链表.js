/**
 * @description 从尾到头打印链表 掌握链表的循环
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const stack = []
  while (head) {
    // 依次推入栈中
    stack.push(head.val)
    head = head.next
  }
  const result = []
  for (let k = stack.length; k--; k >= 0) {
    result.push(stack[k])
  }
  return result;
};