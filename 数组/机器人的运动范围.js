/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * dfs 
 * 1. 首先初始化一个二维数组, 
 * 2. 依次向当前格的四周遍历, 判断边界条件
 * 3. 计数, 并且标记当前位置, 防止下次重复进来
 */
var movingCount = function (m, n, k) {
  // 初始化二维数组
  const arr = new Array(m).fill(false).map(_ => new Array(n).fill(false))
  let count = 0
  const dfs = (i, j) => {
    // 边界判断
    if (i < 0 || j < 0 || i >= m || j >= n || reduceNumber(i) + reduceNumber(j) > k || arr[i][j]) return;
    arr[i][j] = true
    count++
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
  dfs(0, 0)
  return count
};


const reduceNumber = (num) => {
  return num % 10 + (num - (num % 10)) / 10
}