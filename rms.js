/*
given a string of numbers, make the string an array
Find the root mean square of numbers in the array
return the answer as a string array.
*/

function rootMeanSquare(str) {
    // Make an array out of the string
    let numberArray = str.split(",");
    // Set root mean square initial value
    let total = 0;
    // Loop through the array
    numberArray.forEach(el => {
        // push total after calculating power of each number
        total += Math.pow(Number(el), 2);
    })
    // Round the total divided by the length of the array
    return (Math.round(total / numberArray.length)).toString().split("");
}
console.log(rootMeanSquare("25,10,45,87"));

