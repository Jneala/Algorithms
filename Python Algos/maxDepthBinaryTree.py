# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
        
class Solution:
    # Recursive DFS, easiest method
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
        
    # DFS
    def maxDepthIterative(self, root: Optional[TreeNode]) -> int:
        pass
    
    # Breath FS
    def maxDepthRecursive(self, root: Optional[TreeNode]) -> int:
        pass