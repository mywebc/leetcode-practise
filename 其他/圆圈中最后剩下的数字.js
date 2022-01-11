/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * 数学题
 */
var lastRemaining = function (n, m) {
  // 会超时
  // const arr = [];
  // for (let i = 0; i < n; i++) arr.push(i);
  // let head = 0;
  // while (arr.length > 1) {
  //     head = (head + m - 1) % arr.length;
  //     arr.splice(head, 1);
  // }
  // return arr[0];

  // 反推
  let pos = 0;
  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i;
    console.log(pos)
  }
  return pos;
};