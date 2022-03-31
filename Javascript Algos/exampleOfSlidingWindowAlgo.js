/**
 * @param {string} string
 * @return {number}
 *
 */
// Using a Sliding Window Algorithm to solve finding the longest continuous subtring within a given string.
function longestContinuousSubstring(string){
  // Edge case for empty string
  if(!string){
    return 0;
  }
  // Declare variables
  // Starting index of the window
  let start = 0; 
  // Ending index of the window
  let end = 0; 
  // Maximum length of the substring
  let maxLength = 0;
  // A set to store the unique characters
  const uniqueCharacters = new Set();

  // A while loop to continue as long as there are characters
  while (end < string.length){
    if(!uniqueCharacters.has(string[end])){
      uniqueCharacters.add(string[end]);
      console.log(uniqueCharacters)
      end++;
      maxLength = Math.max(maxLength, uniqueCharacters.size);
    } else{
      uniqueCharacters.delete(string[start])
      start++
    }
  }
  return maxLength;
};

let input = "blahblahblap";
console.log(longestContinuousSubstring(input));