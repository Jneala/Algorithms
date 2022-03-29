//Brute force method
//Time complexity O(n^2)
// function twoSum(arr, val){
//   let indexes =[];
//   for(i = 0; i < arr.length; i++){
//     for(j = i+1; j < arr.length-1; j++){
//       if(arr[i]+arr[j] === val){
//         indexes.push(i);
//         indexes.push(j);
//         break
//       }
//     }
//   }
//   console.log(indexes);
//   return indexes;
// }

// twoSum([7,2,8,12],9);

//More elegant
//Time complexity O(n)

