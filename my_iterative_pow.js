<<<<<<< HEAD
/*
**
** QWASAR.IO -- my_iterative_pow
**
**
** @param {Integer} param_1
** @param {Integer} param_2
** @return {integer}

**
*/

function my_iterative_pow(param_1, param_2) {
    let result = 1;
    for (let i = 0; i < param_2; i++) {
        result *= param_1;
    }
    return result;
};
console.log(my_iterative_pow(2, 4));
// index 0 --- 1*2 = 2
// index 1 --- 2*2 = 4
// index 2 --- 4*2 = 8
=======
/*
**
** QWASAR.IO -- my_iterative_pow
**
**
** @param {Integer} param_1
** @param {Integer} param_2
** @return {integer}

**
*/

function my_iterative_pow(param_1, param_2) {
    let result = 1;
    for (let i = 0; i < param_2; i++) {
        result *= param_1;
    }
    return result;
};
console.log(my_iterative_pow(2, 4));
// index 0 --- 1*2 = 2
// index 1 --- 2*2 = 4
// index 2 --- 4*2 = 8
>>>>>>> 0d039fb0f47bf1bb49df7a29fc98acc79c69ec5d
// index 3 --- 8*2 = 16