/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let xNode = new ListNode();
    xNode.next = head;
    head = xNode;
    // 调整顺序 1 为head  2 为 nextNode 
    //                  1--2--3--4--5   1--2--3--4--5
    // 第一步 调整 1--3  1--3--4--5      2--3--4--5（没有指向2的节点拉）
    // 第二步 调整 2--4  1--3--4--5      2--4--5 
    // 第三步 反向 3--2  1--3--2--4--5   1--3--2--4--5
    // 下一次 就是 2 为head  重复
    // 
    while (head.next !== null && head.next.next !== null) {
        let nextNode = head.next;
        head.next = nextNode.next; // 1--3
        nextNode.next = head.next.next; // 2 --4 (1的后一个3的后一个是4)
        head.next.next = nextNode; // (1的后一个)3--2
        head = nextNode; // 存储
    }

    return xNode.next;
};
// @lc code=end