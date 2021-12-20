/**
 * @param {string} s
 * @return {number}
 * 滑动窗口
 * 维护一个数组, 当遍历出的元素数组中已经有时, 删除数组中的元素, 重新push, 并计算最大值
 */
var lengthOfLongestSubstring = function (s) {
  const strArr = []
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    const index = strArr.indexOf(s[i])
    if (index !== -1) {
      strArr.splice(0, index + 1)
    }
    strArr.push(s[i])
    maxLength = Math.max(maxLength, strArr.length)
  }
  return maxLength
};