function maxProfit(prices){
  let maxProfit = 0
  let min = prices[0]

  for(var i = 1; i < prices.length; i++){
    min = Math.min(min, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - min)
  }
  return maxProfit
};

let p = [7,1,5,3,6,4]
let p2 = [7,6,4,3,1]
let p3 = [1,2]
let p4 = [1,4,2]
console.log(maxProfit(p4))