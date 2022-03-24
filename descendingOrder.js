
/*
Your task is to make a function that can take any 
non-negative integer as an argument and return it with 
its digits in descending order. Essentially, rearrange 
the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321
*/

function descendingOrder(n) {
    //...
    n = n.toString().split("").sort().reverse().join("");
    return parseInt(n);
}
console.log(descendingOrder(123456789));

/*
function descendingOrder(n) {
    //...
    return parseInt(n.toString().split("").sort().reverse().join(""));
}
*/