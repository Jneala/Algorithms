function shiftArray(arr, val){
  if(arr.length == val){
    console.log(arr)
    return arr
  }
  if(val > arr.length){
    val %= arr.length
  }
  for(var i = 1; i <=val; i++){
    var temp = arr[arr.length -1]
    for(var j = arr.length -1; j >= 0; j--){
      arr[j] = arr[j -1]
    }
    arr[0] = temp
    console.log(arr)
  }
}

shiftArray([1,2,3,4,5,6], 2)