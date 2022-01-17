/**
 * @param {number} n
 * @return {number}
 * i - 一个数的平方 + 1 (+1 比如26 - 25, 最后就是2个, 知道了吧)
 * dp[i] = Math.min(dp[i], dp[i-j*j] + 1)
 */
var numSquares = function (n) {
  if (n === 0) return 0
  const dp = [0]
  for (let i = 1; i <= n; i++) {
    dp[i] = i
    for (let j = 1; j <= n; j++) {
      if (i - j * j < 0) {
        break
      }
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
};