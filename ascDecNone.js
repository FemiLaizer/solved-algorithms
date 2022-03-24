/* Write a function that 
return sorted array in ascending order if str = "Asc",
returns sorted array in descending order if str = "Des",
return same array if str = "None" */

function ascDesNone(arr, str) {
    if (str === "None") {
        return arr;
    }
    else if (str === "Asc") {
        return arr.sort((a, b) => a - b, 0);
    } else {
        return arr.sort((a, b) => a - b, 0).reverse();
    }
}
console.log(ascDesNone([4, 3, 2, 1]), "Asc");
console.log(ascDesNone([7, 8, 11, 66]), "Des");
console.log(ascDesNone([1, 2, 3, 4]), "None");