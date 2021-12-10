/**
 * @param {number} n
 * @return {number}
 * 确定转移方程  dp[k] = dp[k - 1] + dp[k - 2]
 */
var fib = function (n) {
    const dp = [0, 1]
    for (let k = 2; k <= n; k++) {
        dp[k] = (dp[k - 1] + dp[k - 2]) % 1000000007
    }
    return dp[n]
};