/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 二分
 */
var findNumberIn2DArray = function (matrix, target) {
  // 方法1； 
  // return matrix.flat().includes(target)

  // 方法二：
  // let flag = false
  // matrix.some(_ => {
  //     if (_.includes(target)) {
  //         flag = true
  //         return true
  //     }
  // })
  // return flag

  // 方法三：
  // let newArr = []
  // matrix.forEach(_ => {
  //     _.forEach(__ => {
  //         newArr.push(__)
  //     })
  // })
  // return newArr.includes(target)

  // 方法四 有序的数组查找某个元素,优先使用二分
  let resFlag = false
  for (let k = 0; k < matrix.length; k++) {
    resFlag = findTarget(matrix[k])
    if (resFlag) break
  }

  return resFlag;

  function findTarget(arr) {
    let lf = 0
    let rh = arr.length - 1
    let mid = 0
    while (lf <= rh) {
      mid = Math.floor((lf + rh) / 2)
      if (arr[mid] <= target) {
        lf = mid + 1
      } else {
        rh = mid - 1
      }
    }
    return arr[lf - 1] === target ? true : false
  }
};