function threeSumClosest(nums, target){
  //Sort the array
  nums.sort((a, b) => a - b);
  console.log("Sorted array: " + nums);
  var n = nums.length;
  //Starting case, and result variable
  var closest = [nums[0] + nums[1] + nums[n -1]];
  //Loop through the array for each element
  for(var i = 0; i < n; i++){
    //Set a left and right pointers
    let j = i + 1;
    let k = n - 1;
    //Loop until j and k meet
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if(sum <= target){
        j++;
      } else {
        k--;
      }
      if(Math.abs(closest - target) > Math.abs(sum - target)){
        closest = sum;
      }
    }
  }
  return closest;
};

var test = [-2, 4, 3, -1, 10, 6];
console.log(threeSumClosest(test, 16));