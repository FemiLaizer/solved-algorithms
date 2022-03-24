
function countBy(x, n) {
    let result = [], i = x;
    while (result.length < n) {
        result.push(i);
        i += x;
    }
    return result;
}
console.log(countBy(1, 10));
console.log(countBy(2, 5));