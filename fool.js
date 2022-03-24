
/*
>>>>>> Udersatnding a for loop <<<<<<<<<

 Try do the same thing different ways with for loop
 Factorial of 5 ...... 5! (5 * 4 * 3 * 2 * 1) = ?
*/
let givenNumber = 5;
let numFactorial = 1;
let factorialNum = 1;

for (let a = givenNumber; a >= 1; a--) {
    numFactorial *= a;
}
console.log("numFactorial = " + numFactorial);



for (let b = 1; b <= givenNumber; b++) {
    factorialNum *= b;
}
console.log("factorialNum = " + factorialNum);