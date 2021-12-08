/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力解法 O(n)
var search1 = function (nums, target) {
  let num = 0
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] === target) {
      num++
    }
  }
  return num
};

/**
 * 
 * 排序数组中的搜索问题，首先想到 二分法 解决, O(log n)对数n
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = 0
  // 查找右边界
  while (left <= right) {
    mid = Math.floor((right + left) / 2)
    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  let rightP = right

  left = 0
  right = nums.length - 1
  // 查找左边界
  while (left <= right) {
    mid = Math.floor((right + left) / 2)
    if (nums[mid] >= target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  let leftP = left

  return rightP - leftP + 1

};




