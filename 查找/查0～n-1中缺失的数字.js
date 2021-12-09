/**
 * @param {number[]} nums
 * @return {number}
 * @description 排序中数组的搜索问题， 首先想到二分解决 记住
 * 二分 
// 正常数组一定是nums[i] = i，非正常数组nums[i] != i, 遇到此情况右边数组往左移动， 直到nums[i] = i, 这时右边数组第一位就是要找的数字
var missingNumber = function (nums) {
    let lf = 0
    let rh = nums.length - 1
    let mid = 0
    // 
    while (lf <= rh) {
        mid = Math.floor((lf + rh) / 2)
        if (nums[mid] === mid) {
            lf = mid + 1
        } else {
            rh = mid - 1
        }
    }
    return rh + 1

};