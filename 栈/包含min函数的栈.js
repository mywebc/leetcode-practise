/**
 * @description 包含min函数的栈 O(1)
 * 复杂度为1的话, 必须借助辅助栈, 需要一个只存取min值的辅助栈
 *https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.normalStack = []
  this.minStack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  // 普通栈正常push
  this.normalStack.push(x)
  if (this.minStack.length === 0) {
      this.minStack.push(x)
      return
  }
  // 最小栈只存取最小值
  const lastValueMin = this.minStack[this.minStack.length - 1]

  if (lastValueMin < x) {
      this.minStack.push(lastValueMin)
  } else {
      this.minStack.push(x)
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.normalStack.pop()
  this.minStack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.normalStack[this.normalStack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
  return this.minStack[this.minStack.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/