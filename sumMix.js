/*
Write a function to sum numbers of given array.
Note: some of the number were passed in as strings
*/
function sumMix(arr) {
    let total = 0;
    arr.map((num) => total += parseInt(num));
    return total;
}
console.log(sumMix([23, "14", 5, "9"]));

function sumMix2(arr) {
    let total = arr.reduce((accumulator, num) => {
        return accumulator += +(num)
    }, 0);
    return total;
}
console.log(sumMix2([23, "14", 5, "9"]));