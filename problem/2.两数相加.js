/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
// Accepted
// 1563/1563 cases passed (176 ms)
// Your runtime beats 11.05 % of javascript submissions
// Your memory usage beats 38.59 % of javascript submissions (43.5 MB)

// 添加一些条件 
// 1563/1563 cases passed (160 ms)
// Your runtime beats 23.26 % of javascript submissions
// Your memory usage beats 29.37 % of javascript submissions (43.7 MB)

//  缓存一些 值可以加快速度
// 1563/1563 cases passed (124 ms)
// Your runtime beats 90.42 % of javascript submissions
// Your memory usage beats 94.25 % of javascript submissions (42.9 MB)

// 调整 算法 为链表中较小的最快

// 1563/1563 cases passed (152 ms)
// Your runtime beats 35.57 % of javascript submissions
// Your memory usage beats 49.52 % of javascript submissions (43.4 MB)

//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//最快
var addTwoNumbers = function(l1, l2) {
   
    let addNode = new ListNode(0); 
    // 进位
    let carry = 0;
    let lastNode = addNode;

    while (l1 || l2){
        let add = (l1 ? Number(l1.val) : 0) + (l2 ? Number(l2.val) : 0) + carry;
        lastNode.next = new ListNode(add%10);
        lastNode = lastNode.next;
        carry = add > 9 ? 1 : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);  
    }

    if(carry != 0){
        lastNode.next = new ListNode((carry));
    }

    return addNode.next;
};


// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//     // 转成数组 两两相加 合成新数组
//     let addNode = new ListNode(0); 
//     // 进位
//     let carry = 0;
//     let lastNode = addNode;

//     while (l1 || l2){
//         if(carry === 0 && (!l1 || !l2)){
//             let restNode = l1 ? l1 : l2;
//             lastNode.next = restNode;
//             l1 = l2 = null;
//         }else{
//             let add = (l1 ? Number(l1.val) : 0) + (l2 ? Number(l2.val) : 0) + carry;
//             lastNode.next = new ListNode(add%10);
//             lastNode = lastNode.next;
//             carry = add > 9 ? 1 : 0;
//             l1 && (l1 = l1.next);
//             l2 && (l2 = l2.next); 
//         }
//     }

//     if(carry != 0){
//         lastNode.next = new ListNode((carry));
//     }

//     return addNode.next;
// };

// var addTwoNumbers = function(l1, l2) {
//     // 转成数组 两两相加 合成新数组
//     // 
//     let addNode = null; 
//     // 进位
//     let carry = 0;
//     let currentNode = null;
//     let lastNode = null;

//     while (l1 && l1.val !== null){

//         let a =  Number(l1.val);
//         let b =  l2 ? Number(l2.val) : 0;

//         currentNode = new ListNode((a + b + carry)%10);
//         !addNode && (addNode = currentNode)
//         lastNode && (lastNode.next = currentNode);
//         lastNode = currentNode;
//         carry =  parseInt((a + b + carry)/10);

//         if(l2 == null){
//             if(carry == 0){
//                 currentNode.next = l1.next;
//                 l1 = null;
//             }
//             else{
//                 l1 = l1.next;
//             }
//         }else{
//             l1 = l1.next;
//             l2 = l2.next;
//         }
//     }

//     while (l2 &&l2.val !== null){
//         let b =  Number(l2.val);
//         currentNode = new ListNode((b + carry)%10);
//         lastNode.next = currentNode;
//         lastNode = currentNode;
//         carry =  parseInt((b + carry)/10);
//         // 没有进位时 直接移植后面的链表
//         if(carry == 0){
//             currentNode.next = l2.next;
//             l2 = null;
//         }else{
//             l2 = l2.next;
//         }
//     }

//     if(carry != 0){
//         currentNode = new ListNode((carry));
//         lastNode.next = currentNode;
//     }

//     return addNode;
// };
// var l1 = new ListNode(1);
// l1.next = new ListNode(9);
// l1.next.next =  new ListNode(9);

// var l2 = new ListNode(1);
// l2.next = new ListNode(9);
// l2.next.next =  new ListNode(9);

// addTwoNumbers(l1,l2)

// @lc code=end

