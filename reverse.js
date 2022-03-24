/* write a function that reverse given string or array */
function reverseGivenString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseGivenString("word"));

function reverseGivenString2(str) {
    return str.join("").split("").reverse().join("");
}
console.log(reverseGivenString2(["word"]));