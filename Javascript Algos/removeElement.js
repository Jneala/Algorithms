/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  //Declare a variable to hold the length of the updated array
  let count = 0;
  for(let i = 0; i < nums.length; i++){
    //If the element does not equal the value given, add it to the count index, this pushes all none val to the front, thus deleting the val.
    if(nums[i] != val){
      console.log(nums)
      nums[count] = nums[i]
      count++
    }
  }
  //Return the length of the updated array.
  return count;
};

let nums = [2,3,3,4,6,3,7,10];
console.log(removeElement(nums, 3));
console.log(nums);
