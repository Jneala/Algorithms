/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

//Find sets of four unique numbers in an array of numbers that equal the target.

var fourSum = function(nums, target) {
    //Set a variable to hold the reuslting quadruplets
    const quadruplets = [];
    //Edge cases
    if(nums == undefined || nums.length < 4){
      return quadruplets;
    }
    //Sort the array
    nums.sort((a,b) => a - b);
    //Set a vairable to hold the length of the array
    const n = nums.length;
    //Loop for each element in array, to end the third to last element
    for(var i = 0; i < n - 3; i++){
      //Check for duplicates, check that i is not the first index and that the current nums is not the same as the previous nums
      if(i > 0 && nums[i] == nums[i - 1]){
        continue;
      }
      //Reducing to three sum problem, set j to the next index from i, to end the second to last index
      for(let j = i + 1; j < n - 2; j++){
        //Check for duplicates
        if(j != i + 1 && nums[j] == nums[j - 1]){
          continue;
        }
        //Set variable to the right of j
        let k = j + 1;
        //Set variable to the last element
        let l = n - 1;
        //Reduce to two sum problem, loop as long as k and l are apart
        while(k < l){
          //Set current sum to the base set of four
          const currentSum = nums[i] + nums[j] + nums[k] + nums[l];
          //If the sum is less than the target, since the array is sorted, move k to the right
          if(currentSum < target){
            k++;
            //If the sum is more than the target, move l to the left
          } else if (currentSum > target){
            l--;
            //Otherwise the current sum is equal, push to quadruplets
          }else{
            quadruplets.push([nums[i], nums[j], nums[k], nums[l]]);
            k++;
            l--;
            //Check for duplicates at this point
            while(k < l && nums[k] == nums[k - 1]){
              k++;
            }
            while(k < l && nums[l] == nums[l + 1]){
              l--;
            }
          }
        }
      }
    }
    return quadruplets;
};

let test = [1,0,-1,0,-2,2];
console.log(fourSum(test));