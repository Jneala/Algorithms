function romanToInt(s){
  const romanMap = new Map();

  romanMap.set('I', 1);
  romanMap.set('V', 5);
  romanMap.set('X', 10);
  romanMap.set('L', 50);
  romanMap.set('C', 100);
  romanMap.set('D', 500);
  romanMap.set('M', 1000);

  var num = romanMap.get(s[s.length - 1]);

  for(let i = s.length -2; i >= 0; i--){
    if(romanMap.get(s[i]) >= romanMap.get(s[i + 1])){
      num += romanMap.get(s[i])
    }else {
      num -= romanMap.get(s[i])
    }
    // console.log(num);
  }
  return num;
};

let s = "MCMXCIV";
console.log(romanToInt(s));