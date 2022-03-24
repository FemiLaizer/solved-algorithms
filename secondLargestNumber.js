/* Write a function that returns second largest number
in a given array
*/
function secondLargestNumber(arr) {
    let result = "", arr1 = arr.sort((a, b) => a - b);
    return arr1[arr1.length - 2];
}
console.log(secondLargestNumber([10, 40, 20, 30, 50]));
console.log(secondLargestNumber([70, 40, 20, 105, 101]));