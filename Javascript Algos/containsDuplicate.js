/**
 * @param {number[]} nums
 * @return {boolean}
 */

//time O(nlogn) space O(1)
var containsDuplicate = function(nums) {
    nums.sort();
    console.log(nums);
    for(let i = 0; i < nums.length; i++){
      if(nums[i] === nums[i + 1]){
        return true;
      }
    }
    return false;
};

let n = [4,2,6,3,7,10,1,10]
console.log(containsDuplicate(n))

