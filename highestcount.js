// Given a string, right a function that returns the charater
// of the string with the highest count eg "helloooo"
function highestCount(str) {
    let obj = {}, highCount, strArray = str.split("");
    for (let char of strArray) {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }
    let objValues = Object.values(obj);
    highCount = Math.max(...objValues);
    for (let key in obj) {
        if (obj[key] === highCount) {
            return key;
        }
    }
}
console.log(highestCount("heloooo"));

function highestCount2(str) {
    let result = [], highCount = 0, strArray = [...str];
    for (let i = 0; i < strArray.length; i++) {
        if (!strArray[i + 1]) {
            result.push()
        }
    }
}
console.log(highestCount2("heloooo"));