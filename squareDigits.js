/*
Welcome. In this kata, you are asked to square every digit of a number 
and concatenate them.
For example, if we run 9119 through the function, 
811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
/*
function squareDigits(num) {
    let result = [];
    let number = num.toString().split("");
    for (let num of number) {
        result.push(num * num);
    }
    return parseInt(result.join(""));
}
console.log(squareDigits(3123)); */

function squareDigits(num) {
    let result = [];
    [...num.toString()].forEach(element => {
        result.push(Math.pow(element, 2));
    })
    return parseInt(result.join(""));
}
console.log(squareDigits(3123));

/*
const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));

function squareDigits(num) {
    return +String(num).split('').map(function (num) { return +num * +num; }).join('');
}

function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }

  */