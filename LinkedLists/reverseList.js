/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// var reverseList = function(head) {
function reverse(llist) {
  let head = llist; // set a reference to head of linked list
  if(head === null) return;

  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode){
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }
  head= prevNode;
  return head;
};
