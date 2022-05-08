class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from tkinter.tix import ListNoteBook
from typing import List, Optional


class Solution:
    #T O(n) S O(1)
    def reverseList(self, head: Optional[ListNoteBook]) -> Optional[ListNode]:
        prev, curr = None, head
        
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        return prev
    
    def reverseListRecursive(self, head: ListNode) -> ListNode:
        #recursive T O(n), S O(n)
        if not head:
            return None
        
        newHead = head
        if head.next:
            newHead = self.reverseList(head.next)
            head.next.next = head
        head.next = None
        return newHead
