/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//check if s or t and the same length, if not, return false
//do s and t contain the same letters
//make an array of each anagram
//use the splic method, passing double quotes ""
//compare each element of each array, or
//sort the arrays and they should have the same array pattern



var isAnagram = function(s, t) {
  if (s.length == t.length){
    let sArray = s.split("");
    let tArray = t.split("");

    sArray.sort()
    tArray.sort()

    for(var i = 0; i < s.length; i++){
      if(sArray[i] !== tArray[i]){
        return false;
      }
    }
    return true;

  }else{
    return false;
  }
};

let s = "anagram"
let t = "margana"

// let s = "rat"
// let t = "car"

console.log(isAnagram(s, t))