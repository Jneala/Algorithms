//Brute force method
//Time complexity O(n^2)

// function bruteForceTwoSum(arr, sum){
//   let indexes =[];
//   for(i = 0; i < arr.length; i++){
//     for(j = i+1; j < arr.length-1; j++){
//       if(arr[i]+arr[j] === sum){
//         indexes.push(i);
//         indexes.push(j);
//         break
//       }
//     }
//   }
//   console.log(indexes);
//   return indexes;
// }
// bruteForceTwoSum([7,2,8,12],9);

//More elegant
//Time complexity O(2n)
//Using two passes with for loop, non-nested.

// function twoPassTwoSum(arr, sum){
//   let hashMap = {};
//   for (let i = 0; i < arr.length; i++) {
//     hashMap[arr[i]] = i;   
//   };

//   for (let j= 0; j< arr.length; j++) {
//     let target = sum - arr[j];
//     if (hashMap.hasOwnProperty(target) &&      
//     hashMap[target] !== j) {
//           return [j, hashMap[target]]
//     };
//   };
//   return "not found";
// };

// console.log(twoPassTwoSum([12,8,2,7], 10))


//Most elegant
//Time complexity O(n)
//Using only 1 pass with a for loop, checking for the target and adding the indices in one go.


function onePassTwoSum(arr, sum){
  let hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let target = sum - arr[i];

    if(hashMap.has(target)){
      return [i, hashMap.get(target)];
    };
    hashMap.set(arr[i], i);
  };
};

console.log(onePassTwoSum([12,2,7,8],9))