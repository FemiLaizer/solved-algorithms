

// print out only the unique value..... the odd one

function uniqueValue(arr) {
    return [...new Set(arr)];
}
console.log(uniqueValue([1, 1, 1, 2, 1, 1, 1]));
console.log(uniqueValue([0, 0, 0, 0.55, 0, 0, 0]));

function uniqueValue2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === arr[i]) continue;
        if (arr[0] !== arr[i]) return arr[i] || arr[0];
    }
}
console.log(uniqueValue2([1, 1, 1, 2, 1, 1, 1]));
console.log(uniqueValue2([0, 0, 0, 0.55, 0, 0, 0]));
console.log(uniqueValue2([7, 0, 0, 0, 0, 0, 0]));
console.log(uniqueValue2([0, 0, 0, 1, 0, 0, 0]));
console.log(uniqueValue2([9, 9, 9, 9, 9, 9, 3]));
console.log(uniqueValue2([2, 2, 5, 2, 2, 2, 2]));
console.log(uniqueValue2([3, 4, 3, 3, 3, 3, 3]));