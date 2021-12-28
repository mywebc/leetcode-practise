/**
 * @param {number} n
 * @return {number}
 * 要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * 用递归
 */
var sumNums = function (n) {
  return n && sumNums(n - 1) + n
};