/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
// Accepted
// 41/41 cases passed (92 ms)
// Your runtime beats 73.11 % of javascript submissions
// Your memory usage beats 82.15 % of javascript submissions (39.6 MB)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // 
    // 把所有赋值前移，并且删除最后一个元素
    while(node && node.next){
      node.val = node.next.val;

      if(!node.next.next){
        node.next = null;
      }
      node = node.next;
    }
};
// @lc code=end

