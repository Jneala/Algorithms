// function print1To255(){
//     for (var i = 1; i <= 255; i++){
//         console.log(i)
//     }
// }

// print1To255()

// function printIntsAndSum0To255(){
//   var sum = 0
//   for(var i = 0; i <= 255; i++){
//     sum = sum + i
//     console.log("Int:" + i + " Sum:" + sum)
//   }
// }
// printIntsAndSum0To255()

// function maxInArray(arr1){
//   var max = arr1[0]
//   for(var i = 0; i <= arr1.length -1; i++){
//     if(arr1[i] > max){
//       max = arr1[i]
//     }
//   }
//   console.log("The max in array is: " + max)
// }

// maxInArray([1, 22, 4, 6, 32, 21, 0])

// function printMinMaxAverageOfArray(arr1){
//   var min = 0
//   var max = 0
//   var sum = 0
//   for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i] > max){
//       max = arr1[i]
//     }
//     if(arr1[i] < min){
//       min = arr1[i]
//     }
//     sum = sum + i
//   }
//   var average = sum / arr1.length
//   console.log(max)
//   console.log(min)
//   console.log(average)
// }

// printMinMaxAverageOfArray([-1, 2, 4, 5, 0])

// function swapStringForArrayNegValues(arr1){
//   for(var i = 0; i <= arr1.length -1; i++){
//     if(arr1[i] < 0){
//       arr1[i] = "Dojo"
//     }
//   }
//   console.log(arr1)
// }

// swapStringForArrayNegValues([-1, 2, 4, -2, 9, -3])

// function printAverageOfArray(arr1){
//   var sum = 0
//   for(var i = 0; i <= arr1.length -1; i++){
//     sum = sum + arr1[i]
//   }
//   var average = sum / arr1.length
//   return average
// }

// console.log(printAverageOfArray([-4, 2, 3, 4, 5]))

// function shiftArrayValuesLeft(arr1){
//   for(var i = 0; i < arr1.length -1; i++){
//     arr1[i] = arr1[i + 1]
//   }
//   arr1[arr1.length -1] = 0
//   console.log(arr1)
// }

// shiftArrayValuesLeft([1, 2, 3, 4, 5])

// function countPositiveNums(arr1){
//   var counter = 0
//   for (var i = 0; i <= arr1.length -1; i++) {
//     if(arr1[i] > 0){
//       counter++
//     }
//     arr1[arr1.length -1] = counter
//   }
//   console.log(counter)
//   console.log(arr1)
// }

// countPositiveNums([-1, 2, 3, -4, 5])

// function evenAndOdds(arr1){
//   var oddCount = 0
//   var evenCount = 0
//   for(var i = 0; i <= arr1.length -1; i++){
//     if(arr1[i] % 2 != 0){
//       oddCount++
//       evenCount = 0
//       if(oddCount == 3){
//         console.log("That's odd!")
//         oddCount = 0
//       }
//     }
//     else {
//       evenCount++
//       oddCount = 0
//       if(evenCount == 3){
//         console.log("Even more so!")
//         evenCount = 0
//       }
//     }
//   }
// }
// var sampleArray = [1, 2, 4, 6, 3, 5, 7, 3, 2, 4, 6, 2]
// evenAndOdds(sampleArray)


// function pushFront(arr, val){
//   for(var i = arr.length -1; i >= 0; i--){
//     arr[i + 1] = arr[i]
//   }
//   arr[0] = val
//   console.log(arr)
// }
// pushFront([1, 2, 3, 4, 5], 7)





