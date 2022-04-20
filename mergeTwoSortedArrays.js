/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
  //Edge cases if one of the lists is empty
  if(!list1){
    return list2;
  }
  if(!list2){
    return list1;
  }
  //Declare variable to store the new head of the resulting linked -list
  let head = null;
  //Create a reference to the head, null during first iteration
  let temp = head;
  //Chose the smaller of the two available heads, and set temp to equal it
  if(list1.val < list2.val){
    temp = head = new ListNode(list1.val);
    list1 = list1.next;
  }else {
    temp = head = new ListNode(list2.val);
    list2 = list2.next;
  }
  //Set loop to when both lists exist/ until one becomes null, using swap with temp
  while(list1 && list2){
    if(list1.val < list2.val){
      temp.next = new ListNode(list1.val);
      list1 = list1.next;
      temp = temp.next;
    }else {
      temp.next = new ListNode(list2.val);
      list2 = list2.next;
      temp = temp.next;
    }
  }
  //Add all the nodes in list1 , if remaining, using swap with temp
  while(list1){
    temp.next = new ListNode(list1.val);
    list1 = list1.next;
    temp = temp.next;
  }
  //Add all the nodes in list2, if remaining, using swap with temp
  while(list2){
    temp.next = new ListNode(list2.val);
    list2 = list2.next;
    temp = temp.next;
  }
  return head;
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
};
