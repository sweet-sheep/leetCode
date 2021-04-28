/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
      // Z自行变化
    // 第一行的点 就是 2num-2  从0开始 
    // 第二行的点 就是会有两个交集 2num-2 + 1, 2num-2 -1
    // 第三行的点 就是会有两个交集 2num-2 + 1, 2num-2 -1
    // 最后一行  从 num - 1 开始 跨度不变
    
    let ans = "";
    let step = 2 * numRows - 2;
    if(step == 0) return s;
    for (let i = 0; i < numRows; i++) {
        let currentIndex =  i !== numRows - 1 ? 0 : numRows - 1;

        if (i == 0 || i == numRows - 1) {
            while (s[currentIndex]) {
                ans += s[currentIndex];
                currentIndex = currentIndex + step;
            }
        } else {
            while (s[currentIndex - i] || currentIndex - i < 0 ) {
                s[currentIndex - i] && (ans += s[currentIndex - i]);
                s[currentIndex + i] && (ans += s[currentIndex + i]);
                currentIndex = currentIndex + step;
            }
        }
    }
    return ans;
};
//1157/1157 cases passed (132 ms)
//Your runtime beats 33.18 % of javascript submissions
//Your memory usage beats 30.31 % of javascript submissions (43.6 MB)
// @lc code=end

