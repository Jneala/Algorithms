/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// class ListNode{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//Running a while loop, traversing each list element, adding them together, checking for carry over to pass to next iteration. 
function addTwoNumbers(l1,l2){
  //Initialise a new ListNode to be returned at the end.
  var newListNode = new ListNode(0);
  //Initialise a var to hold the head of the list, or current node. Currently a 0.
  var head = newListNode;
  //Create variables to be used on each pass.
  var sum = 0;
  var carry = 0;

  //while there are elements or carry over
  while(l1 !== null || l2 !== null || sum > 0){
    //If l1 has a value, add it to sum, then move l1 to the next value.
    if(l1 !== null){
      sum = sum + l1.val;
      l1 = l1.next;
    }
    //If l2 has a value, add it to sum, then move l2 to the next value.
    if(l2 !== null){
      sum = sum + l2.val;
      l2 = l2.next;
    }
    //If the sum is over 9, set carry to 1 and subtract 10 from sum.
    if(sum > 9){
      carry = 1;
      sum = sum - 10;
    }
    //Add the sum into head, then move to the next node.
    head.next = new ListNode(sum);
    // console.log(head);
    head = head.next;
    // console.log(head);
    //Set sum to equal the carry.
    sum = carry;
    carry = 0; 
  }
  //Return the resulting ListNode, ignoring the first entry.
  // console.log(newListNode);
  return newListNode.next;
};

