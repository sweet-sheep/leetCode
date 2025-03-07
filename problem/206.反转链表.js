/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 循环的方法
// var reverseList = function(head) {
//     let nodeHead  = head;
//     if(!head){
//       return head;
//     }
//     let nextNode = head.next;

//     while(nextNode){
//       // 记录下一个值
//       let currentNextNode = nextNode.next;

//       nextNode.next = head;
//       head = nextNode;
//       nextNode = currentNextNode;
//     }
//     // 清除第一位的指向
//     nodeHead.next = null;
    
//     return head;
// };
// 递归方法
//  从后往前翻转
var reverseList = function(head) {
  if(!head || !head.next){
    return head;
  }
  
  let lastNode = reverseList(head.next);

  head.next.next = head;
  // 清除第一位的指向
  head.next = null;
  
  return lastNode;
};

// @lc code=end

