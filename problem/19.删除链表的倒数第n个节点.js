/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
//  208/208 cases passed (88 ms)
//  Your runtime beats 68.21 % of javascript submissions
//  Your memory usage beats 83.35 % of javascript submissions (39.1 MB)


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 找到倒数第N+1个
  let nodeHead = new ListNode(-1);
  nodeHead.next = head;

  let headIndex = 0;
  // 倒数N+1个
  let nIndex = nodeHead;
  while(head.next){
    head = head.next;
    // 如果从开头数 已经有了N个 则 可以往后移动一个 保持N的位置 直到最后
    if(++headIndex >= n){
      nIndex = nIndex.next;
    }
  }
  // 删除第N个数据
  nIndex.next = nIndex.next.next;

  return nodeHead.next;

};
// @lc code=end

