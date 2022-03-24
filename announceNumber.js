//Announce the number
function announce(num) {
    let stringOfInteger = String(num).split(""), result = [];
    let inWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "negative"];

    stringOfInteger.forEach(value => {
        for (let i = 0; i < inWord.length; i++) {
            if (value === "-") value = "10";
            if (Number(value) === i) {
                result.push(inWord[i]);
            }
        }
    })
    return result.join(" ");
}
console.log(announce(10001));
console.log(announce(-593));


//Announce the number
function announce2(num) {
    let objNum = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "-": "negative"
    };
    let numArr = [...num.toString()];
    let eachNum = [];

    for (let i = 0; i < numArr.length; i++) {
        Object.keys(objNum).forEach((key) => {
            if (key == numArr[i]) {
                eachNum.push(objNum[key] + " ")
            }
        })
    }
    return eachNum.join('');
}
console.log(announce(10001));
console.log(announce(-593));