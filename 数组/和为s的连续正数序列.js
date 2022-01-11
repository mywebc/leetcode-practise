/**
 * @param {number} target
 * @return {number[][]}
 * 双指针 滑动窗口
 */
var findContinuousSequence = function (target) {
  const result = []
  const mid = Math.round(target / 2)
  // 定义指针
  let p1 = 1
  let p2 = 2
  let temp = [p1]
  while (p1 < p2 && p2 <= mid) {
    // 求和
    const reduceNum = temp.reduce((pre, curr) => pre + curr)
    if (reduceNum + p2 < target) {
      temp.push(p2)
      p2++
    } else if (reduceNum + p2 > target) {
      p1++
      p2 = p1 + 1
      temp = [p1]
    } else {
      temp.push(p2)
      result.push(temp)
      p1++
      p2 = p1 + 1
      temp = [p1]
    }
  }
  return result
};

var findContinuousSequence2 = function (target) {
  const result = []
  const mid = Math.round(target / 2)
  for (let i = 1; i <= mid; i++) {
    const ret = [i]
    let p1 = i + 1
    while (p1 <= mid) {
      const total = ret.reduce((pre, curr) => pre + curr)
      if (total + p1 < target) {
        ret.push(p1)
        p1 = p1 + 1
      } else if (total + p1 > target) {
        break
      } else {
        ret.push(p1)
        result.push(ret)
        break
      }
    }
  }
}