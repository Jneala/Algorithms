# Compared to my javascript solution, this one has less time but more space.

# Using HashSet
from typing import List
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()
        
        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False
        