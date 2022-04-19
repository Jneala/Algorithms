//Remove the Nth from-the-end node, with one pass, using Two Pointer Technique. This is involving singlely linked list.

//Take in the head, also known as the first node of the list, and the nth node from the end to be removed.
function removeNthFromEnd(head, n){
  //Declare variables to hold each of the two pointers, one being ahead of the other. Set them to the first node.
  let slow = head;
  let fast = head;
  //Move fast pointer n steps ahead so the slower will land on the nth-from-end node when the faster hits the end of the list.
  for(let i = 0; i < n; i++){
    //The fast node reaches the end
    if(fast.next == null){
      //If n is equal to the number of nodes, the length, delete the head node. ex n = 3 and the length is 3, delete the head and return the remaining nodes
      if(i == n - 1){
        head = head.next;
      }
      return head;
    }
      //Loop until we reach to the end.
    fast = fast.next;
  }
  //Now we will move both fast and slow pointers
  while(fast.next !== null){
    slow = slow.next;
    fast = fast.next;
  }
  //Delink the nth node from the last
  if(slow.next !== null){
    slow.next = slow.next.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}