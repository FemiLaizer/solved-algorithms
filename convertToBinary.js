
/*
How to convert number to binary using .toString()
*/
let binaryNum = 11;
console.log(binaryNum.toString(2));

/*
The function adds two numbers and converts the sum to binary
using toString() method
*/
function convertToBinary(num1, num2) {
    let sum = num1 + num2;
    return sum.toString(2);
}
console.log(convertToBinary(45, 21));


/*
Convert the number before adding them
*/
// function convertToBinary(num1, num2) {
//     let sum = num1.toString(2) + num2.toString(2);
//     return sum;
// }
// console.log(convertToBinary(5, 9));