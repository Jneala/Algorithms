/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    if(root == null){
      return 0;
    }
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    let compare = leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
    return compare;
};

var maxDepth = function(root) {
  if(!root){
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};