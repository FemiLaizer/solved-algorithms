
/*
Take 2 strings s1 and s2 including only letters from ato z. 
Return a new sorted string, the longest possible, containing 
distinct letters - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"

/*
function longest(s1, s2) {
  // your code
  return[...new Set(s1+s2)].sort().join('')
}
*/

let longest = (s1, s2) => [...new Set(a + b)].sort().join("");

console.log(longest(a, b));

