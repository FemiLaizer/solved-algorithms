<<<<<<< HEAD
/*
**
** QWASAR.IO -- my_fibonacci
**
**
** @param {Integer} param_1
** @return {integer}

**
*/

function my_fibonacci(param_1) {
  if (param_1 > 1) {
    return my_fibonacci(param_1 - 1) + my_fibonacci(param_1 - 2);
  } else if (param_1 === 1) {
    return 1;
  } else if (param_1 === 0) {
    return 0;
  } else {
    return -1;
  }
};
//  0,1,1,2,3,5
// 0, 1, 1
  
=======
/*
**
** QWASAR.IO -- my_fibonacci
**
**
** @param {Integer} param_1
** @return {integer}

**
*/

function my_fibonacci(param_1) {
  if (param_1 > 1) {
    return my_fibonacci(param_1 - 1) + my_fibonacci(param_1 - 2);
  } else if (param_1 === 1) {
    return 1;
  } else if (param_1 === 0) {
    return 0;
  } else {
    return -1;
  }
};
//  0,1,1,2,3,5
// 0, 1, 1
  
>>>>>>> 0d039fb0f47bf1bb49df7a29fc98acc79c69ec5d
// 0, 1,1,2