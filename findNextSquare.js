
/* 
// Return the next square if sq is a perfect square, -1 otherwise
function findNextSquare(sq) {
    // we got the square of sq and store it 
    let parameter = Math.sqrt(sq);
    //  we add 1 to parameter to have next number 
    let nextNum = parameter + 1;
    //  Find square root of the next number 
    let nextSqrt = Math.pow(nextNum, 2);
     if sq is not a perfect square return -1  
    return sq % parameter !== 0 ? -1 : nextSqrt;// Return the next square if sq is a perfect square
} 
*/
console.log(findNextSquare(121));
console.log(findNextSquare(114));

//Return the next square if sq is a perfect square, -1 otherwise
function findNextSquare(sq) {
    // we got the square of sq and store it
    let parameter = Math.sqrt(sq)
    /* if sq is not a perfect square return -1  */
    // Return the next square if sq is a perfect square
    return sq % parameter !== 0 ? -1 : Math.pow(++parameter, 2);
}


/*
//  Return the next square if sq is a perfect square, -1 otherwise 
function findNextSquare(sq) {
    // we got the square of sq and store it 
    let parameter = Math.sqrt(sq);
    //  we add 1 to parameter to have next number 
    let nextNum = parameter + 1;
    //  Find square root of the next number 
    let nextSqrt = Math.pow(nextNum, 2);
    // if sq is not a perfect square return -1  
    if (sq % parameter !== 0) {
        return -1;
    }
    //  Return the next square if sq is a perfect square 
    else {
        return nextSqrt;
    }
}
*/

/*
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}
*/