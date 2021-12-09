/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (s === "") return " "
  const map = new Map()
  // 将字符串依次遍历存到map中
  for (let k = 0; k < s.length; k++) {
    if (map.has(s[k])) {
      map.set(s[k], true)
    } else {
      map.set(s[k], false)
    }
  }
  let res = " "
  // 知道第一次出现false的字符
  for (let k = 0; k < s.length; k++) {
    if (map.get(s[k]) === false) {
      res = s[k]
      break
    }
  }
  return res
};