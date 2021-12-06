// 不可以使用shift,只能使用push和pop方法
/**
 * 新建两个栈， 一个pushStack用来模拟增加操作， 一个popStack用来存储倒序的数据， 使用popStack来模拟删除操作
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */
var CQueue = function () {
    this.pushStack = []
    this.popStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.pushStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.popStack.length === 0) {
        while (this.pushStack.length) {
            // 依次将pushStack的元素推入popStatck中
            this.popStack.push(this.pushStack.pop())
        }
    }
    return this.popStack.length > 0 ? this.popStack.pop() : -1
};