/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 // 暴力 Math.pow(x, n) 或者 x ** n
 // 正常使用递归
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === -1) return 1 / x;
  if (n % 2 === 0) {
    let a = myPow(x, n / 2);
    return a * a
  }
  else {
    let b = myPow(x, (n - 1) / 2);
    // 因为减一, 所以要多乘一个x
    return b * b * x
  }
};