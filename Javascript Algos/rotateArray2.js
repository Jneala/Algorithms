//swap towards the center

function swapArray(arr){
  for(var i = 0; i < arr.length/2; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp;
  }
  return arr;
}

var swap1 = [1,2,3,4,5,6,7];
// console.log(swapArray(swap1));

//Using one line
function oneLineSwap(arr){
  for(var i = 0; i < arr.length/2; i++){
    [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
  }
  return arr;
}

var swap2 = [1,2,3,4,5,6,7];
// console.log(oneLineSwap(swap2));