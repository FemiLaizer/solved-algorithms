// return a new array of values in array a that are divisible by n
function isDivisibleBy(a, n) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % n === 0) {
            result.push(a[i]);
        }
    }
    return result;
}
console.log(isDivisibleBy([1, 3, 15, 6, 3, 6, 7, 4], 2));