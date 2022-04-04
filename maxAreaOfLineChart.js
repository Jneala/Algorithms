/**
 * @param {number[]} height
 * @return {number}
 */

//Brute force
// O(n^2)
 var maxAreaBruteForce = function(height) {
   //Declare variables
  let shortest = height[0];
  let largestArea = 0;
  let currentArea = 0;
  let areas = [];

   //Not going to change the given heights, so I will use the input as a parameter.
    for(i = 0; i < height.length; i++){
      let indexLength = 1;

      for(j = i + 1; j < height.length; j++){
        if(height[i] < height[j]) {
          shortest = height[i];
        }else{
          shortest = height[j]
        }        
        currentArea = shortest * indexLength;
        if(currentArea > largestArea){
          largestArea = currentArea;
        }
        indexLength++;
      }
    }
return largestArea;
};
var height = [1,8,6,2,5,4,8,3,7];
// console.log(maxAreaBruteForce(height));
var height = [4,3,2,1,4];
// console.log(maxAreaBruteForce(height));


//More elegant
//time 0(n) space O(1)
function maxArea(heightsArray){
  //Declare variable to store maximum area.
  let maxiumumArea = 0;
  //Set pointers for left and right.
  let left = 0;
  let right = heightsArray.length -1;
  //Set while loop until left and right meet.
  while(left < right) {
    //Declare variable for the shorter vertical line
    let shorterLine = Math.min(heightsArray[left], heightsArray[right]);
    //Check maximum area
    maxiumumArea = Math.max(maxiumumArea, shorterLine * (right - left));
    //Move pointers based on least height, least height moves inward
    if(heightsArray[left] < heightsArray[right]) {
      left++;
    }else{
      right--;
    }
  }
  return maxiumumArea;
};
var height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));
var height = [4,3,2,1,4];
console.log(maxArea(height));