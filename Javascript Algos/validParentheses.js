//Function to check if a given string of {}[] and () is valid.

var isValid = function(s) {
  let st = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      st.push(s[i]);
    } else if (legend[st.pop()] !== s[i]) {
      return false;
    }
  }
  return st.length ? 0 : 1;
};

var s = "()";
console.log("Result: " + isValid(s));
