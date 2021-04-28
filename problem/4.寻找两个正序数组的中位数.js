/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    // 递归
    // 出去 某个数组只有1个数字时出 直接取另1个的 剩余需要的位置
    // 排除法 每次排除 前K 小的数字
    
    // 判断 奇偶数 
    let isOdd = (nums1.length + nums2.length)%2 == 0; 


    var findMedain = function(start1, end1, start2, end2) {
        // 剩余需要求中位数的数值 
        let num = end1 - start1 + end2 - start2;
        let median = Math.ceil(num / 2); // 向上取整
        let step1 = (end1 - start1 > median) ? median : end1 - start1;
        let step2 = (end2 - start2 >  median - step1) ?  median - step1 : end2 - start2;
    
        // 如果其中后一个的数组位数不够，
        if(step2 + step2 != median){
            step1 = median - step2;
        }
    
        if (start1 == end1) {

            if (isOdd){
                return 
            }
            
            return nums2[start2 + step2];
        }
    
        if (start2 == end2) {

            return nums1[start1 + step1];
        }
        // 缩小范围
    }
};



// @lc code=end