/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     let arr = [];
//     var length = nums.length;
//     // 数组排序 避免重复
//     nums.sort();
//     nums.forEach((num, index) => {
//         // 从面的值中寻找两数之和 为 
//         if (index > length - 3) return;
//         if (num == nums[index - 1]) return;

//         let twoNumberArr = twoSum(nums.slice(index + 1), -num);
//         if (twoNumberArr.length !== 0) {
//             twoNumberArr.forEach((indexArr) => {
//                 arr.push([num, indexArr[0], indexArr[1]]);
//             })
//         }
//     })
//     return arr;
// };

// //  返回的对应的数 [[1,2],[3,5]]
// var twoSum = function(nums, target) {
//     let indexObj = {}; // 存储相加为 target 值的index
//     let arr = [];
//     // nums 已排序
//     nums.forEach((num, index) => {
//         let another = indexObj[num] ;
//         if (another != undefined) {
//             // 避免重复 如果重复就不继续 以下为特殊情况
//             //  num == indexObj[num] && num != nums[index - 2]) 
//             //  避免 [0,0,0] ，0 不返回 或者 返回两个【0,0】
//              if((num == another && num != nums[index - 2]) || num != nums[index - 1]){
//                 arr.push([another, num]);
//              }
//         } else {
//             indexObj[target - num] = num;
//         }
//     });
//     return arr;
// };
function compareNumbers(a, b) {
    return a - b;
  }
//  
// var threeSum = function(nums) {
//     let arr = [];
//     var length = nums.length;
//     // 数组排序 避免重复
//     nums.sort(function(a, b) {
//         return a - b;
//     });
//     nums.forEach((num, index) => {
//         // 从面的值中寻找两数之和 为 
//         if (index > length - 3) return;
//         if (num == nums[index - 1]) return;

//         //let twoNumberArr = twoSum(nums.slice(index + 1), -num);

//         let twoNumberArrs = nums.slice(index + 1);
//         let indexObj = {}; // 存储相加为 target 值的index
//         let target = -num;

//         if (target >= twoNumberArrs[0] * 2 && target <= twoNumberArrs[twoNumberArrs.length - 1] * 2) {
//             twoNumberArrs.forEach((item, index) => {
//                 let another = indexObj[item];
//                 if (another != undefined) {
//                     // 避免重复 如果重复就不继续 以下为特殊情况
//                     //  num == indexObj[num] && num != nums[index - 2]) 
//                     //  避免 [0,0,0] ，0 不返回 或者 返回两个【0,0】
//                     if ((item == another && item != twoNumberArrs[index - 2]) || item != twoNumberArrs[index - 1]) {
//                         arr.push([num, another, item]);
//                     }
//                 } else {
//                     indexObj[target - item] = item;
//                 }
//             });
//         }
        
//     })
//     return arr;
// };
// 双链表法
var threeSum = function(nums){

    let ansArr = [];
    let length = nums.length;
    nums.sort((a,b) => a-b);

    nums.forEach((first, index) => {
        if (index > length - 3) return;
        if (first == nums[index - 1]) return;
        //  第二层循环
        let thirdIndex = length - 1;

        for(let j = index + 1; j <= thirdIndex ; j++){
            let second = nums[j];
            if (j != index+1 &&  second == nums[j - 1]) continue;

            while( first + second + nums[thirdIndex] >0 && thirdIndex > j)
                thirdIndex--;

            if( thirdIndex > j && first + second + nums[thirdIndex] == 0){
                ansArr.push([first,second,nums[thirdIndex]])
            }
        }
    })
    return ansArr;
}
// @lc code=end