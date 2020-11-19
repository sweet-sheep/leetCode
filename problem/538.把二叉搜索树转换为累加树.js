/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * val 传入比根节点大的值
 */
var convertBST = function(root) {
    if (root == null) return root;
    
    if(root.right != null){
        convertBST(root.right);
        root.val = root.right.val + root.val;
    }

    if(root.left != null){
        root.left.val = root.val + root.left.val;
        convertBST(root.left);
    }

    return root;
};

// @lc code=end

