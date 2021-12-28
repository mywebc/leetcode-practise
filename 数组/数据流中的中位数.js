/**
 * initialize your data structure here.
 * 困难
 */
var MedianFinder = function () {
  this.nums = []
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function (num) {
  // 使用二分在查找的时候就排序
  let low = 0, high = this.nums.length
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (this.nums[mid] <= num) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  this.nums.splice(low, 0, num)
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function () {
  const len = this.nums.length;
  if (len % 2 === 1) {
    return this.nums[Math.floor(len / 2)]
  } else {
    return (this.nums[len / 2] + this.nums[len / 2 - 1]) / 2
  }
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/