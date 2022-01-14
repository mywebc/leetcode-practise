/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * dp[i]j] = dp[i-1][j] + dp[i][j-1]
 * 遇到1就设置为0
 * O(mn)
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 行
  const m = obstacleGrid.length
  // 列
  const n = obstacleGrid[0].length
  // init arr to 0
  const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0))

  // column to 1 unless 1
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1
  }

  // row to 1 unless 1
  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // need to judge the current is not 1
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};