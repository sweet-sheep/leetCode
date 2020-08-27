/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let indexObj = {}; // 存储相加为 target 值的index
    
    let arr = [];
    nums.forEach((num, index) => {
        if (indexObj[num] != undefined) {
            arr = [indexObj[num], index];
            return;
        } else {
            indexObj[target - num] = index;
        }
    });
    return arr;
};
// @lc code=end