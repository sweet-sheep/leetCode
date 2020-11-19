/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 想法：
// 遍历字符串  使用MAP 存储当前不重复的子字符串 
// map 对象可以快速知道 该值是否存在 并且有顺序
// 遍历过程中 如果map 中不存在 则直接放入map 
// 如果map 中有该值 即表示 应该存储当前的长度 保留最大长度
// 对map 进行修改 使用遍历 把存在该值前面的以及该值都删掉 然后把该值放入 形成新的不重复子串
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let maxNum = 0;

    s.split("").forEach((str)=>{
        if(map.has(str)){
            maxNum = updateMax(map, maxNum);
            deleteRepeatString(map, str);
        }else{
            map.set(str,true);
        }
    })

    return  updateMax(map, maxNum);
};

// 遍历 把前面不等于重复的值 删除 知道遇到重复的值
var deleteRepeatString = function(map, repeatStr){
    for (let key of map.keys()) {
        map.delete(key);
        if(key == repeatStr){
            map.set(repeatStr,true);
            return ;
        }
    }
}

var updateMax = function(map,value){
    return map.size > value ? map.size : value;
}

// 第二种方案
// 考虑使用 不删除map的方案 

// 1. 遍历字符串，记录开始位置，循环放入map中 key = value
// 2. 遇到重复值时 记录当前最大不重复的子串长度为 （当前位置 - 1 - start ）
// 3. 重复值的计算为  map.get(key) > start 即表示 该值 在start 到当前位置中有重复值
// 4. start 修改为重复值的位置的下一个位置， 
// 5. 重复以上 找出最大长度
// 6. 最后判断一下剩下字符串的长度

// var lengthOfLongestSubstring = function(s) {
//     let map = new Map();
//     let start = 0;
//     let maxNum = 0;

//     s.split("").forEach((str,index)=>{
//         if(map.has(str) && map.get(str)>= start){
//             maxNum = updateMax(start, index, maxNum);
//             start = map.get(str) + 1;
//         }

//         map.set(str,index);
//     })

//     return  updateMax(start, s.length, maxNum);
// };

// var updateMax = function(start, end, maxNum){
//     let num = end - start;
//     return num > maxNum ? num : maxNum;
// }

// @lc code=end

