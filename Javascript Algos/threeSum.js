/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  //Using the sort() compare function via an arrow function to sort the array in assending order.
  nums.sort((a, b) => a - b);
  //Declare variables
  const n = nums.length;
  const triplets = [];
  //Loop through array
  for (let i = 0; i < n; i++) {
      //Skip duplicates in i index
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      //Set left and right pointers
      let j = i + 1;
      let k = n - 1;
      //Continue while the pointers are apart
      while (j < k) {
          if (nums[i] + nums[j] + nums[k] === 0) {
              triplets.push([nums[i], nums[j], nums[k]]);
              j++;
              //Skip duplicates in j index
              while (j < k && nums[j] === nums[j - 1]) {
                  j++;
              }
              //If less than 0, larger numbers are needed, inciment left pointer
          } else if (nums[i] + nums[j] + nums[k] < 0) {
              j++;
              //Otherwise decriment right pointer
          } else {
              k--;
          }
      }
  }
  return triplets;
};