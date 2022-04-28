//The array nums is already sorted.

function removeDuplicates(nums){
  //Declare a variable to hold the length of the updated array
  let updatedArr = 0;

  //Loop through the array
  for(let i = 0; i < nums.length; i++){
    //If the index is not at the end and the current element is equal to the next element, continue, which will skip to the next index.
    if(i < nums.length -1 && nums[i] == nums[i + 1]){
      continue;
    }
    //These parts are skipped if the above is met.
    nums[updatedArr] = nums[i];
    updatedArr++
  }
  return updatedArr;
}