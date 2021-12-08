/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 * 1. 哈希表 先遍历旧节点, 使用map存下新旧节点的对应关系, 这时候已经知道每个节点的next和random指针的指向了, 然后再次循环, 从map中依次去查找并建立连接关系
 */
var copyRandomList1 = function (head) {
  if (!head) return null
  let curr = head
  const map = new Map()
  // 第一次循环map存储新旧节点的对应关系
  while (curr) {
    // 使用map存下新旧节点的对应关系, (旧节点, 新节点), 新节点暂时先设置值,它的next和random的指向先不设置
    map.set(curr, new Node(curr.val))
    curr = curr.next
  }

  // 第二次循环建立连接关系
  curr = head
  while (curr) {
    // 将新节点建立next关系
    map.get(curr).next = curr.next ? map.get(curr.next) : null;
    // 将新节点建立random关系
    map.get(curr).random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
  }
  return map.get(head)
};

/**
 * 2. 通过拼接链表找到random, 而后再拆分出来
 */
var copyRandomList = function (head) {
  if (!head) return null
  let curr = head
  // 先循环拼接链表 A->A1->B->B1->C->C1
  while (curr) {
    curr.next = new Node(curr.val, curr.next);
    curr = curr.next.next;
  }
  // 第二次循环建立random关系
  curr = head
  while (curr) {
    if (curr.random !== null) curr.next.random = curr.random.next;
    curr = curr.next.next;
  }
  // 拆分链表
  let newNode = head.next, res = newNode;
  curr = head;
  while (curr.next && newNode.next) {
    curr.next = curr.next.next;
    newNode.next = newNode.next.next;
    curr = curr.next;
    newNode = newNode.next;
  }
  curr.next = null;
  return res
};
