//Finding the combinations of letters on a phone pad when given the numbers.

//Call function, setting variables, creating the hashMap, establish edge cases, begining recursion, and returning the result after recursion
function letterCombinations(numbers) {
  //Edge case if argument is not a string, which is required via leetCode
  if(numbers != String){
    numbers = numbers.toString();
  }
  //Declare an empty object to hold the resulting combinations
  let combinations = [];
  //Edge case if the given argument is empty or zero
  if (numbers == null || numbers.length == 0) {
      return combinations;
  }
  //Create object to hold letter values, the indexes matter as only 2-> 9 are applicable, so 0 and 1 need to hold their places.
  const map = [
      "0 doesn't matter",
      "neither does 1",
      "abc",
      "def",
      "ghi",
      "jkl",
      "mno",
      "pqrs",
      "tuv",
      "wxyz"
  ];
  //Begin recursive function, setting previous to a blank string and the index to 0.
  findCombos(combinations, numbers, "", 0, map);
  return combinations;
};

function findCombos(combinations, numbers, previous, index, map) {
  //When the index reaches the end of the numbers given, end recursion.
  if (index == numbers.length) {
      //When time to end recursion, push all of previous to combinations
      combinations.push(previous);
      return;
  }
  //Set variable to hold the map value at the VALUE of "numbers" at the index.
  let letters = map[numbers[index]];
  //Iterate through the letters
  for (let i = 0; i < letters.length; i++) {
      //At each interval, call the function again, adding the current letter to previous and incriment the index for the numbers.
      console.log("current previous:" + previous)
      findCombos(combinations, numbers, previous + letters[i], index + 1, map);
  }
};

console.log(letterCombinations(23));