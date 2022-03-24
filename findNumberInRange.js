
function withinUniqueRange(arrOfNumbers, lowerRange, upperRange) {
    // Write your code here
    /*let result = [];
    for(let i = 0; i < arrOfNumbers.lenght; i++){
      if(arrOfNumbers[i] > lowerRange && arrOfNumbers[i] < upperRange){
        result.push(arrOfNumbers);
      }
    }
    console.log(result);
    return result;
    */
    const result = arrOfNumbers.filter(num => num > lowerRange && num < upperRange)
    return [...new Set(result)];
}
console.log(withinUniqueRange([2, 3, 0, 1, 7], 4, 8))