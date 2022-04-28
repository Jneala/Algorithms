/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  // If a number is negative, it is not a palindrome.
    if(x < 0){
      return false;
    }
    // I am putting x into a variable to be manipulated.
    let number = x;
    // Declare a variable to store the reverse of the input.
    let reverse = 0;
    // Use a while loop to chage the reverse and number variables each loop.
    while(number > 0){
      reverse = reverse * 10 + number % 10;
      number = parseInt(number / 10);
    }
    // Make a return statement that is true if the reverse equals the input.
    return x === reverse;
};



console.log(isPalindrome(101));