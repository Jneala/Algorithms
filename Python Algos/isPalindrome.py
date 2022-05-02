# Least efficient with time and space
class Solution:
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        newStr = ""
        for c in s:
            if c.isalnum():
                newStr += c.lower()
        return newStr == newStr[::-1]
    
    def isPalindrome2(self, s):
        """
        :type s: str
        :rtype: bool
        """
        l, r = 0, len(s) - 1
        while l < r:
            while l < r and not self.alphanum(s[l]): 
                l += 1
            while l < r and not self.alphanum(s[r]): 
                r -= 1
            if s[l].lower() != s[r].lower(): 
                return False
            l += 1
            r -= 1
        print("end of while")
        return True
            
    def alphaNum(self, c):
        return (ord('A') <= ord(c) <= ord('Z') or
                ord('a') <= ord(c) <= ord('z') or
                ord('0') <= ord(c) <= ord('9'))
s = Solution()
stuff = "cats stac"
result = s.isPalindrome(stuff)
print(result)