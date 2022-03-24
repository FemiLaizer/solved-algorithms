
/* Return position of alphabets eg a = 1, e = 5 etc*/

function position(str) {
    let arrayStr = str.toLowerCase().split(""), result = [];
    let alphabets = " abcdefghijklmnopqrstuvwxyz".toLowerCase().split("");

    arrayStr.forEach(el => {
        for (let i = 0; i < alphabets.length; i++) {
            if (el === alphabets[i]) {
                result.push([i]);
            }
        }
    })
    return result.join(" ");
}
console.log(position("The simple man"));