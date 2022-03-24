
// using array method
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("Coding is fun!"));

// using for loop
function reverseLetters(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseLetters("We have all it takes to be great!"));