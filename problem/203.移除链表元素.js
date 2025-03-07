/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let nodeHead = new ListNode(-1);
    let currentHead = nodeHead;
    nodeHead.next = head;

    while(currentHead.next){
      if(currentHead.next.val == val){
        currentHead.next = currentHead.next.next;
      }else{
        currentHead = currentHead.next;
      }
    }

    return nodeHead.next;
};


// @lc code=end

