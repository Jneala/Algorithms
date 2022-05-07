class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) -1
        
        while l <= r:
            # to avoid overflow, use l + ((r - l) // 2)
            # this is not a problem in Python, but it is a worry in other languages when working with VERY large numbers
            m = (l + r) //2
            if nums[m] > target:
                r = m -1
            elif nums[m] < target:
                l = m +1
            else:
                return m
        return -1
