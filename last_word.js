<<<<<<< HEAD
/*Description
Write a program that takes a string and displays its last word followed by a.
A word is a section of string delimited by spaces/tabs or by the start/end of
the string.*/


function last_word(param_1) {
    if (param_1 == "") return param_1;
    let arr = [];
    param_1.includes(",") ?
        arr = param_1.trim("").split(",") :
        arr = param_1.trim("").split(" ");

    const n = arr.length;
    for (let i = 0; i < n; i++) {
        return arr[n - 1];
    }
};
console.log(last_word("FOR PONIES"));
console.log(last_word("this        ...       is sparta"));
console.log(last_word("  lorem,ipsum  "));
=======
/*Description
Write a program that takes a string and displays its last word followed by a.
A word is a section of string delimited by spaces/tabs or by the start/end of
the string.*/


function last_word(param_1) {
    if (param_1 == "") return param_1;
    let arr = [];
    param_1.includes(",") ?
        arr = param_1.trim("").split(",") :
        arr = param_1.trim("").split(" ");

    const n = arr.length;
    for (let i = 0; i < n; i++) {
        return arr[n - 1];
    }
};
console.log(last_word("FOR PONIES"));
console.log(last_word("this        ...       is sparta"));
console.log(last_word("  lorem,ipsum  "));
>>>>>>> 0d039fb0f47bf1bb49df7a29fc98acc79c69ec5d
console.log(last_word(""));