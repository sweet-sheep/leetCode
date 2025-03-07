/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
//  166/166 cases passed (96 ms)
//  Your runtime beats 51.95 % of javascript submissions
//  Your memory usage beats 30.77 % of javascript submissions (39.6 MB)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let headNode = new ListNode(101), 
  lastHead = headNode, // 表示当前节点的上一节点
  currentNode = head;

  headNode.next = head;
  // 当前节点的下一节点
  // 如果一样就删除同样的节点 直到前后节点不一样
  // 如果有重复 就把当前节点也删除
  while(currentNode && currentNode.next){
    let hasRepeat = false;
    while(currentNode.next && currentNode.next.val == currentNode.val){
      currentNode.next = currentNode.next.next;
      hasRepeat = true;
    }

    if(hasRepeat){
      //删除自身 并且不修改上一节点的位置
      lastHead.next = currentNode.next;
    }else{
      lastHead = currentNode;
    }
    // 当前节点 移到下一节点
    currentNode = currentNode.next;
  }

  return headNode.next;
};
// @lc code=end

