/**
 * @param {number[]} nums
 * @return {number}
 */

//Accepted
// 92/92 cases passed (80 ms)
// Your runtime beats 70.45 % of javascript submissions
// Your memory usage beats 21.58 % of javascript submissions (38.6 MB)

var jump = function (nums) {
    // 寻找一个数字能跳跃的数字中 下一次可以更大的数字

    // nums
    // return jumpx(nums, 0);

    // 使用while 循环
    if (nums.length == 1) {
        return 0;
    }
    if (nums[0] + 1 >= nums.length) {
        return 1;
    };

    let curIndex = 0; //最后选中的位置
    let totalStep = 0;
    let step = 1;
    while(curIndex + nums[curIndex] < nums.length - 1){
        let maxStep = nums[curIndex];
        let maxIndex = 0; //最后选中的位置
        let maxValue = 0;
        // 寻找能跳到的最佳位置
        for (let i = curIndex + 1; i <= curIndex + maxStep; i++) {
            if (i + nums[i] > maxValue) {
                maxValue = nums[i] + i;
                maxIndex = i;
            }
        }
        curIndex = maxIndex;
        step ++;    
    }

    return step;
}; 
// // 尾递归调用优化 内存溢出？？？？
// function jumpx(nums, total) {
//     if (nums.length == 1) {
//         return total + 0;
//     }
//     if (nums[0] + 1 >= nums.length) {
//         return total + 1;
//     };

//     // 可以跳跃的最远的长度
//     let maxStep = nums[0];
//     let maxValue = 0;
//     let maxIndex = 0; //最后选中的位置
//     for (let i = 1; i <= maxStep; i++) {
//         if (i + nums[i] > maxValue) {
//             maxValue = nums[i] + i;
//             maxIndex = i;
//         }
//     }

//     return jumpx(nums.slice(maxIndex), total + 1)
// }
// 递归
// function jump(nums) {
//     return jumpx(nums, 0);
//     if (nums.length == 1) {
//         return  0;
//     }
//     if (nums[0] + 1 >= nums.length) {
//         return 1;
//     };

//     // 可以跳跃的最远的长度
//     let maxStep = nums[0];
//     let maxValue = 0;
//     let maxIndex = 0; //最后选中的位置

//     for (let i = 1; i <= maxStep; i++) {
//         if (i + nums[i] > maxValue) {
//             maxValue = nums[i] + i;
//             maxIndex = i;
//         }
//     }

//     return 1 + jump(nums.slice(maxIndex))
// }