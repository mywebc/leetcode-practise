/**
 * @param {number} n
 * @return {number}
 * 0是整数但不是正整数
 * dp[1] = 1
 * dp[2] = 2
 * dp[3] = 3 = dp[1] + dp[2]
 * 转移方程: dp[4] = dp[3] + dp[2] = 5
 */
var climbStairs = function (n) {
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};