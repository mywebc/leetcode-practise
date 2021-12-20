/**
 * @param {number[]} nums
 * @return {number[]}
 * 双指针, 前后对调
 */
var exchange = function (nums) {
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (nums[i] % 2 !== 0) {
      i++
      continue
    }
    if (nums[j] % 2 === 0) {
      j--
      continue
    }
    // 否则就交换
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
    i++
    j--
  }
  return nums
};
