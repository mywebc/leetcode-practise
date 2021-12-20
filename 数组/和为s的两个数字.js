/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 双指针, 前后比较
 */
var twoSum = function (nums, target) {
  let front = 0
  let end = nums.length - 1
  while (front < end) {
    if (nums[front] + nums[end] === target) {
      break
    }
    if (nums[front] + nums[end] > target) {
      end--
    } else {
      front++
    }
  }
  return [nums[front], nums[end]]
};
