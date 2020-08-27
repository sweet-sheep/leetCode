/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {

//     var i = nums.length;
//     var delNum = 0;
//     for (; i > -1; i--) {
//         if (nums[i] == val) {
//             nums.splice(i, 1);
//         }
//     }
//     return nums.length;
// };

var removeElement = function(nums, val) {

    var i = 0;
    var last = nums.length - 1;
    for (; i <= last; i++) {

        if (nums[i] == val) {
            while (nums[last] == val) last--;
            if (i < last) {
                nums[i] = nums[last];
                nums[last] = val;
                last--;
            }
        }
    }
    return Math.min(i, last) + 1;
};


// @lc code=end