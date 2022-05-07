function binarySearch(nums, target){
  let startIndex = 0
  let endIndex = nums.length -1
  while(startIndex <= endIndex){
    let middleIndex = Math.floor((startIndex + endIndex) /2)
    if(target === nums[middleIndex]){
      return console.log("Target was found at index: " + middleIndex)
    }
    if(target > nums[middleIndex]){
      console.log("Searching the right side of array")
      startIndex = middleIndex +1
    }
    if(target < nums[middleIndex]){
      console.log("Searching the left side of array")
      endIndex = middleIndex -1
    }
    else{
      console.log("Not found this time, going again")
    }
  }
}

// binarySearch([1,2,3,4,5,6], 6)

var search = function(nums, target) {
  let startIndex = 0
  let endIndex = nums.length -1

  while(startIndex <= endIndex){
    let middleIndex = Math.floor((startIndex + endIndex) /2)
    if(target === nums[middleIndex]){
    return middleIndex
    }
    if(target > nums[middleIndex]){
      startIndex = middleIndex +1
    }
    if(target < nums[middleIndex]){
      endIndex = middleIndex -1
    }
  }
  return -1
};

console.log(search([-1,0,3,5,9,12], 9))