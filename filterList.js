
/*
In this kata you will create a function 
that takes a list of non-negative integers 
and strings and returns a new list with the 
strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
    // Return a new array with the strings filtered out
    let result = [];
    l.forEach(el => { if (el === Number(el)) result.push(el); })
    return result;
}

console.log(filter_list([1, 2, 'a', 'b'])) // == [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])) // == [1,0,15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])) // == [1,2,123]

/*
const filter_list = l => l.filter(c => typeof c === 'number');

function filter_list(l) {
  return l.filter( function(elem){return typeof elem != "string"} )
}

function filter_list(l) {
 return l.filter(v => typeof v == "number")
}

function filter_list(l) {
  return l.filter(Number.isInteger);
}
*/