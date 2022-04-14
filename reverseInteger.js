/**
 * @param {number} x
 * @return {number}
 */

//time O(log10n) because the integers are base 10
//space O(1) because we are not using any data structure for interim operations.
var reverseInt = function(x) {
  //Case for negative numbers, set a variable to false.
  var isNegative = false;
  if(x < 0){
    //If the number is less than zero, set variable to true.
    isNegative = true;
    //Remove the negative, negative of a negative.
    x = -x;
  }
  //Declare variable to hold the reversed number
  let reversed = 0;
  while(x > 0){
    //Add space to reversed for the next number being added by multiplying it by 10.
    //Then add the remainder of x / 10 to reversed
    reversed = reversed * 10 + x % 10;
    console.log("reversed is: "+ reversed)
    //Remove the ending digit of x
    x = Math.floor(x / 10);
    console.log("x is: "+ x)
  }
  //Constraints given
  if(reversed >= Math.pow(2, 31) -1 || reversed <= Math.pow(-2, 31)){
    return 0;
  }
  //Use a Ternary operator to check isNegative, making reversed negative if true.
  return isNegative ? -reversed : reversed;
};

var x = -123;
console.log(reverseInt(x));


//Using arrow function and built in functions:
function reversedNum(num) {
  return (
    //Change the resulting string into a float
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
        //Apply the original num sign to the float.
    ) * Math.sign(num)
  )                 
}