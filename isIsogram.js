/*
An isogram is a word that has no repeating letters,
consecutive or non-consecutive. Implement a function that
determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
    //...
    let givenStr = str.toLowerCase().split("");
    let unique = [...new Set(givenStr)];
    return unique.length === givenStr.length ? result = true : result = false;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));




// function isIsogram(str) {
//     //...
//     let before = str.toLowerCase().split("");
//     let after = before.join("");
//     for (let i = 0; i < before.length; i++) {
//         if (before[i] === after.charAt(i)) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }
// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));