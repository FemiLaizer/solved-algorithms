
function tribonacci(signature, n) {
    //your code here
    let fib = [0, 1];
    let data = [];
    if (n < 2) return n;
    for (let i = 0; i < n; i++) {
        console.log(i)
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(signature[i]);
    }
    return data;
}

console.log('Fibonacci Series: ', tribonacci([1, 1, 1], 10));

console.log((0.4 * (1517547.47)) +
    (0.15 * (569080.30)) +
    (0.1 * (75877.37)) +
    (0.03 * (113816.06)) +
    ((0.65 * (0.1 * (379386.87)))));

