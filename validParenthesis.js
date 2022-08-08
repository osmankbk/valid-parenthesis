// Writing this checker algorithm strictly for the round brackets parenthesis. A couple of tweaks is needed to incorporate other types of brackets.
// Other contraints: an empty or no string argument could be given.

const parenthesisCheckerer = ({s=''}) => {
  if(s === "") return "valid";
  const stack = [];
  const checker = {
    ")": "(",
  }

  for(let i = 0; i < s.length; i++) {
    let char = s[i];
    let openParenthesis = stack[stack.length -1];
    if( char === "(" ) stack.push(char);
    else if( checker[char] && checker[char] === openParenthesis ) stack.pop();
    else if( checker[char] && checker[char] !== openParenthesis ) return false;
  }
  return stack.length ? false : true;
}