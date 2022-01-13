/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  const result = []
  // 行
  let row = matrix.length
  // 列
  let col = matrix[0].length
  // 初始化左右上下的值
  let [left, right, top, down] = [0, col - 1, 0, row - 1]

  while (result.length !== row * col) {
    // 左 -> 右
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    // 当到最右边时候, top -1
    top++

    // 右 -> 下
    for (let i = top; i <= down; i++) {
      result.push(matrix[i][right])
    }
    // 当到最右下时, right - 1 
    right--

    if (result.length === row * col) break

    // 下右 -> 下左
    for (let i = right; i >= left; i--) {
      result.push(matrix[down][i])
    }
    // 到达下左时
    down--

    // 下左 ->上左
    for (let i = down; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left++
  }
  return result

};