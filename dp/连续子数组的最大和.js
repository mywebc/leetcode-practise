/**
 * @param {number[]} nums
 * @return {number}
 * dp[i] 表示在第i位的最大子数组的和
 * dp[i]中如果要最大， dp[i-1] 就要>0, 小于0就不加
 * if(dp[i-1] > 0) dp[i] = dp[i-1] + nums[i]
 * if(dp[i-1]<=0) dp[i] = nums[i]
 */
var maxSubArray = function (nums) {
    const dp = []
    dp[0] = nums[0]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] <= 0) {
            dp[i] = nums[i]
        } else {
            dp[i] = dp[i - 1] + nums[i]
        }
        max = Math.max(max, dp[i])
    }
    return max
};