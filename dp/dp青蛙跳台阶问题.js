/**
 * @param {number} n
 * @return {number}
 * 第一步推出状态转移方程 f(n) = f(n-1) + f(n-2)
 * 第二步，考虑边界情况 f(0) = 1, f(1) = 1
 */

var numWays = function (n) {
    const dp = [1, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }
    return dp[n]
};