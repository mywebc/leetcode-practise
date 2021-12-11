/**
 * @param {number[][]} grid
 * @return {number}
 * dp[i][j]表示在i，j位置时最大礼物数
 * dp[i][j] = Max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 */
var maxValue = function (grid) {
    if (!grid.length) {
        return 0
    }
    // 设置res 储存每个节点最大值的数组
    let res = []
    for (let i = 0; i < grid.length; i++) {
        res[i] = []
        for (let j = 0; j < grid[0].length; j++) {
            res[i][j] = 0
        }
    }
    // 算出向下走第一行的取值
    let m = 0
    for (let i = 0; i < res.length; i++) {
        m += grid[i][0]
        res[i][0] = m
    }
    // 算出向右走第一行的取值
    let n = 0
    for (let i = 0; i < res[0].length; i++) {
        n += grid[0][i]
        res[0][i] = n
    }
    console.log(res)
    // 根据第一行的取值求剩下行的取值
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            res[i][j] = Math.max(res[i][j - 1], res[i - 1][j]) + grid[i][j]
        }
    }
    return res[grid.length - 1][grid[0].length - 1]
};