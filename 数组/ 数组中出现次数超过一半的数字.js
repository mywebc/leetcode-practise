/**
 * @param {number[]} nums
 * @return {number}
 * 1. 哈希表
 * 2. 先排序, 出现最多的必然在中间
 */
var majorityElement = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const getNum = map.get(nums[i])
      map.set(nums[i], getNum + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  let resultNum
  let max = 0
  for (let [key, value] of map) {
    if (value > max) {
      resultNum = key
      max = value
    }
  }
  return resultNum
};