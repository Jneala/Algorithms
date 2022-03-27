// function makeChange(amount){
//   var optimal = {
//     "quarters" : 0,
//     "dimes" : 0,
//     "nickels" : 0,
//     "pennies" : 0
//   }
//   optimal["quarters"] = Math.floor(amount/25)
//   amount %= 25
//   optimal["dimes"] = Math.floor(amount/10)
//   amount %= 10
//   optimal["nickels"] = Math.floor(amount/5)
//   amount %= 5
//   optimal["pennies"] = amount
//   return optimal
// }

// console.log(makeChange(123))