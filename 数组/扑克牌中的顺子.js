/**
 * @param {number[]} nums
 * @return {boolean}
 * 这道题其实需要找规律
 * 如果没有0的情况, 最大值 - 最小值 必然 = 4
 * 有0的情况, 需要排除掉0, 最大值 - 最小值必然 < 5
 */
var isStraight = function (nums) {
  const numsAfter = nums.sort()
  const set = new Set()
  let min = 13 // 最大就为13
  let max = 0
  for (let k = 0; k < numsAfter.length; k++) {
    // 0的话直接跳过
    if (numsAfter[k] === 0) {
      continue
    } else {
      if (set.has(numsAfter[k])) {
        return false
      }
      max = Math.max(max, numsAfter[k])
      min = Math.min(min, numsAfter[k])
      set.add(numsAfter[k])
    }
  }
  return max - min < 5
};
