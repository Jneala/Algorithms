function binarySearch(arr, target){
  let startIndex = 0
  let endIndex = arr.length -1
  while(startIndex <= endIndex){
    let middleIndex = Math.floor((startIndex + endIndex) /2)
    if(target === arr[middleIndex]){
      return console.log("Target was found at index: " + middleIndex)
    }
    if(target > arr[middleIndex]){
      console.log("Searching the right side of array")
      startIndex = middleIndex +1
    }
    if(target < arr[middleIndex]){
      console.log("Searching the left side of array")
      endIndex = middleIndex -1
    }
    else{
      console.log("Not found this time, going again")
    }
  }
}

binarySearch([1,2,3,4,5,6], 6)