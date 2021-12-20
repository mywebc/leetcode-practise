/**
 * @param {string} s
 * @return {string}
 * 双指针, 首尾互调
 */
var reverseWords = function (s) {
  let Arr = s.split(" ").filter(_ => _ !== "")
  let l = 0
  let r = Arr.length - 1
  while (l < r) {
    [Arr[l], Arr[r]] = [Arr[r], Arr[l]]
    l++
    r--
  }
  return Arr.join(" ")
};