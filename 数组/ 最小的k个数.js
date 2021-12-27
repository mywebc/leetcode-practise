/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  // 方法1:
  // const rankArr = arr.sort((a, b) => a - b)
  // 方法2: (快速排序)O(nlogn)
  const quickSort = (arr) => {
    // 边界条件
    if (arr.length <= 1) return arr
    // 找到一个基准值,一般为首尾
    const target = arr[0]
    const left = []
    const right = []
    // 第一个已经作为基准值, 从第二个开始
    for (let k = 1; k < arr.length; k++) {
      if (arr[k] < target) {
        left.push(arr[k])
      } else {
        right.push(arr[k])
      }
    }
    return quickSort(left).concat(target, quickSort(right))
  }
  const rankArr = quickSort(arr)
  return rankArr.slice(0, k)
};

