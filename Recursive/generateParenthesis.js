/**
 * @param {number} n
 * @return {string[]}
 */

//Generate all of the valid n pairs of parentheses, using recursion
var generateParenthesis = function(n) {
  //Variable to hold the array of strings
  const result = [];

  //Call the recursive function, taking in base conditions for the three variables s, open, close, and then the given n.
  generate(result, "", 0, 0, n);
  return result;
};

//Recursive function, taking in the resulting array, a string s, a count for open, a count for closed, and the given n.
function generate(result, s, open, close, n){
  //If the open and close parentheses are both equal to n, push the string to result.
  if(open === n && close === n){
    result.push(s);
    return;
  }
  //If open is less than n, call the recursive function, add an open parentheses, add 1 to open count, and pass the other variables.
  if(open < n){
    generate(result, s + "(", open + 1, close, n);
  }
  if(close < n){
    generate(result, s + ")", open, close + 1, n);
  }
};

let n = 3;
console.log(generateParenthesis(n));