// replace elements in array x that are divisible by y with "isDivisible"
function replaceDivisible(x, y) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] % y === 0) {
            x[i] = "isDivisible";
        }
        result.push(x[i]);
    }
    return result;
}
console.log(replaceDivisible([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));