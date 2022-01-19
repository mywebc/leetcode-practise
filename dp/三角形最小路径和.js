/**
 * @param {number[][]} triangle
 * @return {number}
 * 自底向上
 * dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j]
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length).fill(0).map((_, i) => [...triangle[i]])
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 最后一行不考虑
      if (i === triangle.length - 1) {
        dp[i][j] = triangle[i][j]
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
      }
    }
  }
  return dp[0][0]
};