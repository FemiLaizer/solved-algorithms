function alph(str) {
    let objAlph = {};
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let revAlph = alph.split("").reverse();

    for (let i = 0; i < alph.length; i++) {
        objAlph[alph[i]] = revAlph[i];
    }

    let result = "";
    const key = Object.keys(objAlph);
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            result += " ";
        }
        for (let item in objAlph) {
            if (str[i] === item) {
                result += objAlph[item];
            } else if (str[i] == item.toUpperCase()) {
                result += objAlph[item].toUpperCase();
            }
        }
    }
    return result;
}
console.log(alph("oluwafemi"));
console.log(alph("My horse is Amazing.")); // "Nb slihv rh Znzarmt."