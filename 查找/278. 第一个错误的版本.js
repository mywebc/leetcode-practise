/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * 题意解析: 有序升的数组, 指定版本后, 版本前面返回的都是false, 后面返回的都是true
 * 二分
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lf = 0
    let rh = n
    let mid = 0
    while (lf <= rh) {
      mid = Math.floor((lf + rh) / 2)
      if (isBadVersion(mid)) {
        rh = mid - 1
      } else {
        lf = mid + 1
      }
    }
    return lf
  };
};