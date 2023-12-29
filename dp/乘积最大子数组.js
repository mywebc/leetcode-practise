/**
 * @param {number[]} nums
 * @return {number}
 * dp
 */
var maxProduct = function (nums) {
  // 如果都是正数的情况
  // dp[i] = Math.max(dp[i-1] * nums[i], nums[i])
  // init dp
  // const dp = [nums[0]]
  // // begin 1
  // for (let i = 1; i < nums.length; i++) {
  //     dp[i] = Math.max(dp[i - 1] * nums[i], nums[i])
  // }

  // 如果有负数的情况
  let minNum = nums[0]
  let maxNum = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let mx = maxNum;
    let mn = minNum
    maxNum = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]))
    minNum = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]))
    res = Math.max(maxNum, res)
  }
  return res
};