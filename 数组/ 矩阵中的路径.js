/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * dfs + 回溯
 * 首先找到word的首字母, 然后使用dfs深度遍历, 不符合条件回溯到起点重新dfs
 */
var exist = function (board, word) {
  let row = board.length
  let col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 找到首字母, 开始dfs+回溯
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true
        }
      }
    }
  }
  function dfs(i, j, index) {
    // 边界条件判断
    if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== word[index]) return false
    // 如果是最后一个单词
    if (index === word.length - 1) return true
    // 保存当前位置
    const temp = board[i][j]
    board[i][j] = false
    const res =
      dfs(i + 1, j, index + 1) ||
      dfs(i, j + 1, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j - 1, index + 1);
    board[i][j] = temp
    return res
  }
  return false
};