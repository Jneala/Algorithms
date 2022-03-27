function findPermutations(string){
  if(!string || typeof string !== "string"){
    return "Please enter a string"
  } else if (string.length < 2){
    return string
  }
  let permutationsArray = []
  for(var i = 0; i < string.length; i++){
    var char = string[i]

    //use this to exclude any repititions
    if(string.indexOf(char) != i)
    continue

    var remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
    for(var permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation)
    }
  }
  // console.log(permutationsArray)
  return permutationsArray
}

console.log(findPermutations("food"))