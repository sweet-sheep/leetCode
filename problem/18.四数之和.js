/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ansArr = [];
    let length = nums.length;
    // 排序
    nums.sort((a, b) => a - b);

    // for 循环
    // a, b, c, d, 
    // 定位  a 最小 d 最大
    for (let a = 0, d; a < length - 3 && nums[a]*4 <= target; a++) {
        // 从 a d 之间寻找 b c
        while (nums[a] == nums[a - 1]) a++;

        for (d = length - 1; d > a + 2 && nums[d]*4 >= target; d--) {
             while (nums[d] == nums[d + 1]) d--;
            for (var b = a + 1, c = d - 1; b < c; b++) {
                //
                while (nums[b] == nums[b - 1] && b!== a+1) b++;
                while (nums[a] + nums[b] + nums[c] + nums[d] > target && c > b) {
                    c--;
                }

                if (c > b && nums[a] + nums[b] + nums[c] + nums[d] == target) {
                    ansArr.push([nums[a], nums[b], nums[c], nums[d]])
                }
            }
        }
    }

    return ansArr;
};
// @lc code=end