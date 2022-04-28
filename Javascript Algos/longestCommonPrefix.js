/**
 * @param {string[]} strs
 * @return {string}
 */

//time O(m x n) space O(1)
var longestCommonPrefix = function(strs) {
  //Find the sortest string and its length

  //Set longest common prefix string to empty
  let longestCommonPrefix = "";
  //Edge cases for no string or empty string
  if (strs == null || strs.length == 0){
    return longestCommonPrefix;
  }
  //Set a variable to hold the first string length
  let minLength = strs[0].length;
  //Find the smallest length string from the array
  for (i = 1; i < strs.length; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }
  //Loop through the strings, using minimum length as the constraint
  for (i = 0; i < minLength; i++) {
    //Get the current character from first string
    let current = strs[0][i]
    //Compare current character to the first character of each string
    for (j = 0; j < strs.length; j++) {
      if(strs[j][i] !== current){
        //if a character doesn't match, return
        return longestCommonPrefix;
      }
    }
    //Add the current character to longestCommonPrefix
    longestCommonPrefix += current;
  }
  return longestCommonPrefix;
};