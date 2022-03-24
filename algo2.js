// return numbers of array x that are divisble by 2 and greater than 15
function divisible(x) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0 && x[i] > 15) {
            result.push(x[i]);
        }
    }
    return result.length;
}
console.log(divisible([2, 3, 12, 18, 42, 24]))

// Using filter method
function divisible2(x) {
    const result = x.filter(num => num % 2 === 0 && num > 15)
    return result.length;
}
console.log(divisible2([2, 3, 12, 18, 42, 24]))