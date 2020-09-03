/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// Accepted
// 989/989 cases passed (120 ms)
// Your runtime beats 22.74 % of javascript submissions
// Your memory usage beats 13.18 % of javascript submissions (40.1 MB)

// @lc code=start
//获得正数结果
var getPositiveNum = function(dividend, divisor) {

    if (dividend < divisor) {
        return 0;
    }

    // 获取除数的倍数 得到 结果在 2^n 到2^n+1 直接的值 在这之间继续寻找 
    let harf = 1;
    let multiplyVal = divisor;

    while (dividend - multiplyVal > multiplyVal) {
        multiplyVal += multiplyVal;
        harf += harf;
    }

    // 返回一半的数，然后从剩余的数中在获取半数
    return harf + divide(dividend - multiplyVal, divisor)
}


/**
 * 
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 判断结果是否为负数
    let negative = false;

    // 都转为正整数
    dividend < 0 && (dividend = 0 - dividend) && (negative = !negative);
    divisor < 0 && (divisor = 0 - divisor) && (negative = !negative);

    var ans = getPositiveNum(dividend, divisor);

    ans = negative ? 0 - ans : ans
    // 整数
    ans < -2147483648 && (ans = -2147483648)
    ans > 2147483647 && (ans = 2147483647)

    return ans;
};


