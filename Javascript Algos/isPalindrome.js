/**
 * @param {string} s
 * @return {boolean}
 */

//Using built in functions
var isPalindrome = function(s) {
  var re = /[\W_]/g //or var = /[^A-Za-z0-9]/g

  //Make the characters all lowercase and replace anything not matching re with nothing to remove spaces
  let lowerStr = s.toLowerCase().replace(re, '')
  let reversedStr = lowerStr.split('').reverse().join('')
  console.log(reversedStr)

  //Return a boolean value
  return reversedStr === lowerStr;
};

var s = 'race a car'
// console.log("result: " + isPalindrome(s))

//Using a for loop, stopping the index halfway
var isPalindrome2 = function(s){
  var re = /[\W_]/g //or var = /[^A-Za-z0-9]/g
  let lowerStr = s.toLowerCase().replace(re, '')

  let length = lowerStr.length
  for(var i = 0; i < length/2; i++){
    if(lowerStr[i] !== lowerStr[length - 1 - i]){
      return false
    }
  }
  return true
};
console.log("result: " + isPalindrome2(s))
