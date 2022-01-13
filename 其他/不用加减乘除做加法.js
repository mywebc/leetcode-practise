/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 两数相加考虑 进位(& << 1) + 非进位(^)
 */
var add = function (a, b) {
  while (b) {
    // 进位
    const c = (a & b) << 1;
    // 不考虑进位的加法
    a ^= b;
    // 将进位赋值给b
    b = c;
  }
  return a;
};