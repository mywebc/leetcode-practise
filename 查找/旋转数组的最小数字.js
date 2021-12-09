/**
 * @param {number[]} numbers
 * @return {number}
 * 有序数组查找某个元素使用二分
 * 1. 如果中间值小于右边指针元素, 则判断右边区间一定没有旋转点, 将右边指针移动到中间点, 继续二分
 * 2. 如果中间值小于右边指针元素, 则判断右边区间有旋转点, 将左指针移到中间指针后继续判断, 继续二分
 * 3. 如果中间值等于右边指针元素, 无法判断, 只需要将右边指针往左移动一位, 继续二分
 */
var minArray = function (numbers) {
  if (numbers[0] < numbers[numbers.length - 1]) return numbers[0]
  let lf = 0
  let rh = numbers.length - 1
  let mid = 0
  while (lf < rh) {
    mid = Math.floor((lf + rh) / 2)
    if (numbers[mid] < numbers[rh]) {
      rh = mid
    } else if (numbers[mid] > numbers[rh]) {
      lf = mid + 1
    } else {
      rh = rh - 1
    }
  }
  return numbers[rh]
};