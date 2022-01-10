/**
 * @param {number} n
 * @return {number[]}
 * n表示几个9
 */
var printNumbers = function (n) {
  const result = []
  const lastIndex = Math.pow(10, n)
  for (let i = 1; i < lastIndex; i++) {
    result.push(i)
  }
  return result
};