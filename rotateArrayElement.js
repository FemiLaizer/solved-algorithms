/* Write a function to rotate elemets of array to the left
*/
function rotateArrayElement(arr, n) {
    // let arr1 = arr.splice(0, n);
    // arr.push(...arr1);

    for (let i = 0; i < n; i++) {
        let elem = arr.shift();
        arr.push(elem)
    }
    return arr;
}
console.log(rotateArrayElement([1, 2, 3, 4, 5], 3))