/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  Accepted
//  165/165 cases passed (116 ms)
//  Your runtime beats 12.72 % of javascript submissions
//  Your memory usage beats 63.06 % of javascript submissions (39.7 MB)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let nodehead = head;

  while(head && head.next){
    if(head.next.val == head.val){
      head.next = head.next.next;
    }else{
      head = head.next
    }
  }

  return nodehead;
};
// @lc code=end

