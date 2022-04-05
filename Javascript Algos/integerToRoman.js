/**
 * @param {number} num
 * @return {string}
 */

// Roman numerals represent the numbers 1 - 3999. There is NO Zero.
// The symbols used are given:

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// time O(log10(n)) -> O(log10(3999)) ~= O(3.60) =constant = O(1)
// space not based on input, so O(1)
var intToRoman = function(num) {
    // Declare arrays to hold the values of roman numerals. Taking note of numbers with a 4 or a 9 in them. And there is no zero.

    // Thousanths place
    const M = ["", "M", "MM", "MMM"]
    // Hundreths place
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    // Tenths place
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    // Single place
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  // Use Math.floor to leverage the remainders as indexes. Return the concatination.
  return M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100)/10)] + I[num % 10];
};
console.log(intToRoman(101));