/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//recursive
var invertTree = function(root) {
  function reverseNodes(node){
    if(!node){
      return;
    }
    reverseNodes(node.left);
    reverseNodes(node.right);

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
  reverseNodes(root);
  return root;
};