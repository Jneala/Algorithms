function recursivelyReverseList(head){
  //case to stop recursion, at end of list
  if(head === null || head.next === null){
    return head;
  }

  let reversedHead = recursivelyReverseList(head.next);

  head.next.next = head;
  head.next = null;
  return reversedHead;
}