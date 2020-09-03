/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Accepted
// 87/87 cases passed (84 ms)
// Your runtime beats 42.09 % of javascript submissions
// Your memory usage beats 44.54 % of javascript submissions (37.8 MB)
var sortColors = function(nums) {
    //  头尾指针
    // 遍历中间值 如果为0 则和头指针交换
    // 如果为2 则和尾指针交换
    // 直到 中间值遍历完成
    let start = 0;
    let end = nums.length - 1;

    //while (nums[start] == 0 && start < end) start++;
    //while (nums[end] == 2 && end > start) end--;
    if (end == 0) return nums;

    for (let mid = start; mid <= end;) {
        switch (nums[mid]) {
            case 2:
                nums[mid] = [nums[end], nums[end] = nums[mid]][0];
                end--;
                //while (nums[end] == 2 && end >= start) end--;
                break;
            case 1:
                mid++
                break;
            case 0:
                nums[start] = [nums[mid], nums[mid] = nums[start]][0];
                // while (nums[start] == 0 && start <= end) start++;
                start ++;
                mid++ < start && (mid = start);
        }
    }
    return nums;
};

// 87/87 cases passed (100 ms)
// Your runtime beats 9.99 % of javascript submissions
// Your memory usage beats 35.08 % of javascript submissions (37.8 MB)
// var sortColors = function(nums) {
//     //  头尾指针
//     // 遍历中间值 如果为0 则和头指针交换
//     // 如果为2 则和尾指针交换
//     // 直到 中间值遍历完成
//     let start = 0;
//     let end = nums.length-1;

//     while(nums[start] == 0 && start < end) start ++;
//     while(nums[end] == 2 && end > start) end --;
//     if(end == 0) return nums;

//     // 从中间往两边遍历
//     let midval = parseInt((start + end )/2);
//     let mid = midval;
//     while(mid > start){
//         switch(nums[mid]){
//             case 2: 
//                 nums[mid] = [nums[end],nums[end]=nums[mid]][0];
//                 while(nums[end] == 2 && end >= start) end --;
//                 break;
//             case 1: 
//                 mid --
//                 break;
//             case 0:
//                 nums[start] = [nums[mid],nums[mid]=nums[start]][0];
//                 while(nums[start] == 0 && start <= end) start ++;
//         }
//     }
//     mid = midval;
//     while(mid < end){
//         switch(nums[mid]){
//             case 2: 
//                 nums[mid] = [nums[end],nums[end]=nums[mid]][0];
//                 while(nums[end] == 2 && end >= start) end --;
//                 break;
//             case 1: 
//                 mid ++
//                 break;
//             case 0:
//                 nums[start] = [nums[mid],nums[mid]=nums[start]][0];
//                 while(nums[start] == 0 && start <= end) start ++;
//         }
//     }
//     if(nums[start] == 2 || nums[end] == 0){
//         nums[start] = [nums[end],nums[end]=nums[start]][0];
//     }

//     return nums;
// };
// @lc code=end