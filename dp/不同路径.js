/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * dp 自底向上
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 第一行和第一列都是1
 * O(mn)
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0))

  // 初始化第一列
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  // 初始化第一行
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1
  }

  // 从第一个开始(0开始)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};