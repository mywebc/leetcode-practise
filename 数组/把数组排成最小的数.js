/**
 * @param {number[]} nums
 * @return {string}
 * 比较a+b 与 b+a , 如果a+b < b+a 则a排在b前面。102 - 210 < 0 -> 102 
 * 也可以老老实实的写冒泡排序, 两两比较
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => ("" + a + b) - ("" + b + a)).join("")
};