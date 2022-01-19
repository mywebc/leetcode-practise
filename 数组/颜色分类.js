/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 冒泡
  // for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = 0; j < nums.length - 1; j++) {
  //         if (nums[j] > nums[j + 1]) {
  //             // let temp = nums[j];
  //             // nums[j] = nums[j + 1];
  //             // nums[j + 1] = temp;
  //             [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
  //         }
  //     }
  // }

  // 双指针
  // 思路: 首先默认循环时, 每个位置默认为2, 通过判断原来的位置是什么值, 然后去覆盖
  let p1 = 0
  let p2 = 0
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i]
    nums[i] = 2
    if (temp < 2) {
      nums[p1] = 1
      p1++
    }
    if (temp < 1) {
      nums[p2] = 0
      p2++
    }
  }
};



