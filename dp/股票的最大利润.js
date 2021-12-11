/**
 * @param {number[]} prices
 * @return {number}
 * 1. 维护一个最小值， 依次循环比较，更新最小值， 以及最大差（利润）
 */
var maxProfit = function (prices) {
    let min = prices[0]
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= min) {
            min = prices[i]
        } else {
            res = Math.max(res, prices[i] - min)
        }
    }
    return res
};