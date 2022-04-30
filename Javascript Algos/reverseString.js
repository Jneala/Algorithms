function reverseString(str){
  let result = "";
  for(let i = str.length - 1; i >= 0; i--){
    result += (str[i]);
  }
  return result;
}

let s = "cat";
console.log(reverseString(s));