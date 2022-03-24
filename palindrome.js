// Write a function to check if a given string is a palindrome
// A palindrome is a word that reads the same after it is reversed
// eg racecar, noon, mum
function isAPalindrome(str) {
    let reversedWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }
    if (reversedWord === str) {
        return "It is a palindrome";
    } else {
        return 'It is not a palindrome';
    }
}
console.log(isAPalindrome("144241"))
console.log(isAPalindrome("racecar"))
console.log(isAPalindrome("noon"))