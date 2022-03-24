/*  function => factorial of numbers   */
function numberFactorial(number) {
    /*.... Set initial result to 1  ...*/
    let result = 1;
    /*...  Set a for loop that decreses the given number ..*/
    for (let num = number; num > 1; num--) {
        /*..  check if number is 1  or 0 to return result immediately  */
        if (number === 0 || number === 1) {
            return result;
        }
        /* If result is not 1 or 0, keep multiplying decresing numbers */
        else {
            result *= num;
        }
    }
    /* finally return the result when you're done */
    return result;
}
/* ... Call the function  .... */
console.log(numberFactorial(8));

