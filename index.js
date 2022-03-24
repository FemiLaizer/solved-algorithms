

/*
Create a function that looks through an array arr and
 returns the first element in it that passes a 'truth test'. 
 This means that given an element x, the 'truth test' 
 is passed if func(x) is true. If no element passes the test, 
 return undefined.


*/

function findElement(arr, func) {
    let num = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result[0];
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

function findElement2(arr, func) {
    let num = 0;
    const result = arr.filter(item => item % 2 === 0)
    return result[0];
}
findElement2([1, 2, 3, 4], num => num % 2 === 0);