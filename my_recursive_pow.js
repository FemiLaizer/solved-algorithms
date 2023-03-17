/* ** ** QWASAR.IO -- my_recursive_pow
** ** @param {Integer} param_1
** @param {Integer} param_2
** @return {integer}
***/

function my_recursive_pow(param_1, param_2) {
    if (param_1 === 0) {
        return 0;
    } else if (param_2 > 1) {
        param_1;
        param_2--;
        return my_recursive_pow(param_1, (param_2 - 1 * param_1));
    }
};
console.log(my_recursive_pow(2, 3));
// For 2 pow of 3   // 0 --- 1*2 = 2    // 1 --- 2*2 = 4    // 2 --- 4*2 = 8