// 0(n) time & O(n) space.
function mergeTwoSortedArrays(arr1, arr2) {
  // Initialize variables
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while( current < (arr1.length + arr2.length)) {
    // set variables for the first index of each array.
    let unmerged1 = arr1[index1];
    let unmerged2 = arr2[index2];

    if(unmerged1 < unmerged2) {
      merged[current] = unmerged1;
      index1++
    } else {
      merged[current] = unmerged2;
      index2++
    }
    current++
  }
  return merged;
}

// console.log(mergeTwoSortedArrays([1,2], [4,5,6,7]))
// console.log(mergeTwoSortedArrays([1,3,4], [4,5]))
// console.log(mergeTwoSortedArrays([1,2,3], [2,5]))

// Below sets cause a bug
// console.log(mergeTwoSortedArrays([1,5], [4,5]))
// console.log(mergeTwoSortedArrays([1,3,6], [4,5]))

// With edge cases
//Some outputs will have undefined as the the last index element, such as above. This happens when the end index element of the first array is equal to or more than the end index element of the second array.

//O(n) time & 0(n) space
function edgeMergeTwo(arr1, arr2) {
  //Initialize variables
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {
    //Declare variables to track if the arrays are at their ends, and if the element at index1 becomes larger than at index2.

    let isArr1Empty = (index1 >= arr1.length);
    let isArr2Empty = (index2 >= arr2.length);
    console.log(isArr1Empty, isArr2Empty);

    if(!isArr1Empty && (isArr2Empty || (arr1[index1] < arr2[index2]))){
      merged[current] = arr1[index1];
      index1++
    }else{
      merged[current] = arr2[index2];
      index2++
    }

    current++
  }
  return merged;
}
// console.log(edgeMergeTwo([1,2,3,4], [5,6,7]));
console.log(edgeMergeTwo([1,2,5], [3,4,5,6]));

