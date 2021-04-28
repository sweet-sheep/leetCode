/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 寻找回文串的最初始条件为  和前一个相等 bb 或者 和前一个的前一个相等 bab
    // 在上面的基础上 寻找更长的串 即距离中间一致的位置该值是不是相等
    // 如果回文串找完 当前 下一步从何开始
    // 应该从找到的回文串中间 开始找下一个 
//     Accepted
// 176/176 cases passed (836 ms)
// Your runtime beats 25.74 % of javascript submissions
// Your memory usage beats 41.67 % of javascript submissions (45.3 MB)

    let ansStr = s[0];
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && s[i] == s[i - 1]) {
            // 开始 查看回文串的长度
            let str = getPalidrome(s, i - 0.5)
            ansStr = str.length > ansStr.length ? str : ansStr;
        }
        
        if (i > 1 && s[i] == s[i - 2]) {
             // 开始 查看回文串的长度
             let str = getPalidrome(s, i - 1)
            ansStr = str.length > ansStr.length ? str : ansStr;
        }
    }
    
    return ansStr;
};
// 获取对应中点所在的回文串长度

var getPalidrome = function(s, medium) {
    let arr = [];
    let len = s.length;
    let i = 1;
    
    // 如果中间为整数
    if (medium % 1 == 0){
        // 放入中间值
        arr.push(s[medium]);
    }else{
        i = 0.5;
    }

    while (medium + i < len && medium - i >= 0 && s[medium - i] == s[medium + i]) {
        arr.unshift(s[medium - i]);
        arr.push(s[medium - i]);
        i++;
    }

    return arr.join("");
}

//Manacher  算法  利用中心算法得出的部分信息



// @lc code=end