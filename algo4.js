// sum two different arrays, return the highest sum
function highestSum(x, y) {
    let resultX = 0, resultY = 0;
    for (let i = 0; i < x.length; i++) {
        resultX += x[i];
    }
    for (let j = 0; j < y.length; j++) {
        resultY += y[j];
    }
    if (resultX > resultY) {
        return resultX;
    } else {
        return resultY;
    }
}
console.log(highestSum([15, 7], [12, 17]));

//Using reduce method
function highestSum2(x, y) {
    const firstSum = x.reduce((sum, num) => sum + num, 0);
    const secondSum = y.reduce((sum, num) => sum + num, 0);
    return Math.max(firstSum, secondSum);
}
console.log(highestSum2([15, 7], [12, 17]));