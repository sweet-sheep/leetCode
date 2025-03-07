/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Accepted
// 208/208 cases passed (100 ms)
// Your runtime beats 43.64 % of javascript submissions
// Your memory usage beats 75.9 % of javascript submissions (39.3 MB)

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  //
  let nodeHead = new ListNode("-1");
  if (!l1) return l2;
  if (!l2) return l1;

  // let nodeHeadBackup = nodeHead;
  // 交换l1 l2 
  
  nodeHead.next = l1.val <= l2.val ? l1 : l2;
  l2 = l1.val > l2.val ? l1 : l2;
  l1 = nodeHead.next;

  while (l1) {

    let temp = null;
    // 以l1 为主 把l2 往 l1 里面插入
    if(l1.next == null || l2 == null){
      l2 != null && (l1.next = l2);
      return nodeHead.next;
    }else{
      if(l1.next.val > l2.val){

        temp = l2.next;
        l2.next = l1.next;
        l1.next = l2;

        l1 = l2;
        // l2
        l2 = temp;
      }else{
        l1 = l1.next
      }
    }
  }

  return nodeHead.next;
};
// let l1 = new ListNode(1)
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(4);

// let l2 = new ListNode(1)
// l2.next = new ListNode(3);
// l2.next.next = new ListNode(4);

// mergeTwoLists(l1, l2);

// @lc code=end
