/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // 思路1   
    // 把所有区间展开到数字 再合起来显示成区间，但是会比较耗内存 
    // 行不通啦 只有重复的才会合并，单纯连续的不合并
    // 
    // 思路2 区间排序 合并 插入排序法
    //需要合并的情况
    //   ----        ----  --  ---------  -----
    //         ----                               // 不需要合并的情况  startI == endI 并且 区间末尾 小于下一区间的开头 
    //                                               那其实就是需要合并的区间为0 endI - startI
    //         --------                           // 需要合并 区间末尾 大于下一区间的开头  则合并的区间为 endI - startI +1
    //         ---------------                    // 需要合并 区间末尾 小于下一区间的开头  则合并到区间为 endI - startI
    //         --------------------               // 需要合并 且合并的区间为 endI - startI +1
    //                --                          // 如图不用考虑开头的位置，直接去小就行
    //                 -------                    // 末尾的位置 看情况 再取大 
    // 所以当区间末尾落在下一区间的中间时 需要合并的区间就加一  且 end值修改为 下一区间的末尾

    for(let index = 0; index < intervals.length; index++){

        let [start,end] = intervals[index];

        //处理数组前 删除数组
        intervals.splice(index, 1);
        
        let startI = 0;
        // 找到 开头所在的区间
        while (startI < index && intervals[startI][1] < start) startI++;
        // end 肯定大于start
        let endI = startI;
        while (endI < index && intervals[endI][1] < end) endI++;
        
        // 判断是否在已有的区间内
        startI < index && intervals[startI][0] <= start && (start = intervals[startI][0])

        // 判断是否在已有的区间内
        endI < index && intervals[endI][0] <= end && (end =  intervals[endI][1]);
        endI < index && intervals[endI][0] <= end && endI ++;
        
        intervals.splice(startI, endI - startI, [start, end]);
        index -= endI - startI;
    }

    return intervals;

};

// @lc code=end
//var merge = function (intervals) {
    //let ansArr = [];
    // 思路1   
    // 把所有区间展开到数字 再合起来显示成区间，但是会比较耗内存 行不通啦 只有重复的才会合并，单纯连续的不合并
    // 
    // 思路2 区间排序 合并 插入排序法
    // 区间2 的开头 一定会大于 区间1 的结尾 + 1
    // 区间2 的开头 一定会小于 区间2 的开头 + 1
    // 合并即为 
    // 区间 2 的 开头 小于 区间1 的结尾，但是 区间 2 的 结尾 确 大于 区间 1 的开头
    // 然后 把区间1 拿出来 合并 并重新塞进数组中 

    // 会合并的话 必然时  插入区间的开头 或者 结尾  在某个区间内部 或相连 
    // forEach
    //     Accepted
    // 169/169 cases passed (100 ms)
    // Your runtime beats 48.09 % of javascript submissions
    // Your memory usage beats 9.11 % of javascript submissions (41.5 MB)
    // intervals.forEach(([start, end], index) => {
    //     // 从后往前排序
    //     if (index == 0) {
    //         ansArr.push([start, end])
    //         return;
    //     }

    //     let len = ansArr.length;

    //     if (start > ansArr[len - 1][1] + 1) {
    //         ansArr.push([start, end])
    //         return;
    //     }

    //     if (ansArr[0][0] - 1 > end) {
    //         ansArr.unshift([start, end])
    //         return;
    //     }
    //     let startI = 0;
    //     let endI = 0;

    //     while (ansArr[startI] && ansArr[startI][1] < start) startI++;
    //     while (ansArr[endI] && ansArr[endI][1] < end) endI++;


    //     // 开头或结尾有一个落在区间中 都需要合并 
    //     // 开头和结尾不落在一个区间 也需要合并
    //     if ((ansArr[startI] && ansArr[startI][0] <= start) || (ansArr[endI] && ansArr[endI][0] <= end) || startI !== endI) {

    //         if(ansArr[startI]){
    //             start = Math.min(start, ansArr[startI][0]);
    //         }

    //         if(ansArr[endI] && ansArr[endI][0] <= end){
    //             end = Math.max(end,ansArr[endI][1]);
    //             endI++;
    //         }
            
    //         ansArr.splice(startI, Math.max(endI - startI, 1), [start, end])
    //     } else {
    //         ansArr.splice(startI, 0, [start, end])
    //         return;
    //     }
    // })
    // for 循环  操作本身
    //     Accepted
    // 169/169 cases passed (112 ms)
    // Your runtime beats 21.28 % of javascript submissions
    // Your memory usage beats 12.12 % of javascript submissions (41 MB)
    // for(let index = 0; index < intervals.length; index++){

    //     let [start,end] = intervals[index];
    //        // 从后往前排序

    //     if (index == 0) {
    //         continue;
    //     }

    //     if (start > intervals[index - 1][1] + 1) {
    //         continue;
    //     }
    //     //处理数组前 删除数组
    //     intervals.splice(index, 1);

    //     if (intervals[0][0] - 1 > end) {
    //         intervals.unshift([start, end])
    //         continue;
    //     }
        
    //     let startI = 0;
    //     let endI = 0;

    //     while (startI < index && intervals[startI][1] < start) startI++;
    //     while (endI < index && intervals[endI][1] < end) endI++;


    //     // 开头或结尾有一个落在区间中 都需要合并 
    //     // 开头和结尾不落在一个区间 也需要合并
    //     if ((startI < index && intervals[startI][0] <= start) || 
    //         (endI < index && intervals[endI][0] <= end) || startI !== endI) {

    //         if(startI < index){
    //             let num = intervals[startI][0];
    //             start = start < num ? start : num;
    //         }

    //         if(endI < index && intervals[endI][0] <= end){
    //             let num = intervals[endI][1];
    //             end = end > num ? end : num;
    //             endI++;
    //         }
            
    //         intervals.splice(startI, Math.max(endI - startI, 1), [start, end]);
    //         index -= endI - startI > 1 ? endI - startI : 1;
    //     } else {
    //         intervals.splice(startI, 0, [start, end])
    //     }
    //     // 处理完元素删除
    // }
