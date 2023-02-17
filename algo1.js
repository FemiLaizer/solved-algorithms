// find how many numbers are greater or equal to y and less than z  in array x
function noOfElements(x, y, z) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= y && x[i] < z) {
            result.push(x[i]);
        }
    }
    return result;
}
console.log(noOfElements([1, 2, 3, 4, 5, 6, 7, 8], 3, 7));

// Using filter method
function noOfElements2(x, y, z) {
    const result = x.filter(num => num >= y && num < z)
    return result;
}
console.log(noOfElements2([1, 2, 3, 4, 5, 6, 7, 8], 3, 7));