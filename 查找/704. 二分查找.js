/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分
 */
var search = function (nums, target) {
  let lf = 0
  let rh = nums.length - 1
  let mid = 0
  while (lf <= rh) {
    mid = Math.floor((lf + rh) / 2)
    if (nums[mid] <= target) {
      lf = mid + 1
    } else {
      rh = mid - 1
    }
  }
  return nums[lf - 1] === target ? lf - 1 : -1
};