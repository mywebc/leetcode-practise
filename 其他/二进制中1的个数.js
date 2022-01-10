/**
 * @param {number} n - a positive integer
 * @return {number}
 * 位运算 <<  >> 
 */
var hammingWeight = function (n) {
  let count = 0
  let flag = 1
  while (flag) {
    if (n & flag) {
      count++;
    }
    // 左移一位
    flag = flag << 1;
  }
  return count
};