/*
**
** QWASAR.IO -- alpha_mirror
**
**
** @param {String} param_1
** @return {string}

**
*/

function alpha_mirror(param_1) {
    let objAlph = {}; let alph = "abcdefghijklmnopqrstuvwxyz";
    let revAlph = alph.split("").reverse();

    for (let i = 0; i < alph.length; i++) {
        objAlph[alph[i]] = revAlph[i];
    }

    let result = "";

    for (let i = 0; i < param_1.length; i++) {
        if (param_1[i] == " ") {
            result += " ";
        } else if (param_1[i] == ".") {
            result += ".";
        }
        for (let item in objAlph) {
            if (param_1[i] === item) {
                result += objAlph[item];
            } else if (param_1[i] == item.toUpperCase()) {
                result += objAlph[item].toUpperCase();
            }
        }
    }
    return result;
};
