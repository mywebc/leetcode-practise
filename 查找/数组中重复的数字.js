/**
 * @param {number[]} nums
 * @return {number}
 * @description 用hash表
 */
var findRepeatNumber = function (nums) {
  const map = new Map()
  let val = null
  for (let k = 0; k < nums.length; k++) {
    if (map.has(nums[k])) {
      val = nums[k]
      break;
    } else {
      map.set(nums[k], nums[k])
    }
  }
  return val
};

// 方法2
var findRepeatNumber2 = function (nums) {
  let number = null
  nums.some((_, i) => {
      const key = nums.indexOf(_)
      if (key !== i && key !== -1) {
          number = nums[key]
          return true
      }
  })
  return number
};