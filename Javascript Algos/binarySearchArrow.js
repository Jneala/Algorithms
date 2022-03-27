//binary search using arrow functions
const binarySearch = (arr, target) => {
  let startIndex = 0
  let endIndex = arr.length -1

  while(startIndex <= endIndex){
    let middleIndex = Math.floor((startIndex + endIndex)/2)

    if(target === arr[middleIndex]){
      return console.log("The target was found at index: " + middleIndex)
    }
    if(target > arr[middleIndex]){
      startIndex = middleIndex +1
      console.log("Looking to the right...")
    }
    if(target < arr[middleIndex]){
      endIndex = middleIndex -1
      console.log("Looking to the left...")
    }
    //to show edge case of 
    else{
      console.log("Not Found this iteration, going again...")
    }
  }
}

binarySearch([1,2,3,4,5,6,7,8,9], 4)