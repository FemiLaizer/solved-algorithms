
function nameOfFunction(a, b) {
    console.log(a + b);
}
nameOfFunction(5, 3);

let nameOfFunction2 = (x, y) => console.log(x + y);
nameOfFunction2(2, 3);

let mathsMethod = {
    name: "femi",
    add: (a, b) => { return a + b },
    subtract: (a, b) => { return a - b },
    multiply: (a, b) => { return a * b },
    divide: (a, b) => { return a / b },
    squared: (a) => { return a * a },
    cube: (a) => { return Math.pow(a, 3) },
    squareRoot: (a) => { return Math.sqrt(a) },
    usethis: function () {
        console.log(this.name);
    }
}

let hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg: function () {
        `${this.eggCount++}`;
        return `EGG`;
    }
}
console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }
];
const firstNames = fullNames.map(function (names) {
    return names.first;
});
console.log(firstNames);

let greet = say => (`Hey ${say}`)
console.log(greet("Femi!"))

setTimeout(() =>
    (console.log("I will display in 3 seconds okay?")), 1000);

let id = setInterval(() => {
    console.log("I will keep showing every 5 seconds")
}, 5000);
// This has clear the setInterval above, so it will not display
clearInterval(id);

//Using filter
let sampleNumbers = [2, 4, 5, 6, 7, 1, 42, 15, 16, 9, 8, 12, 23];
// The sampleNumbers did not change filter makes new array from the 
// original array
let evenNumbers = sampleNumbers.filter(num => { return num % 2 === 0 });
console.log(evenNumbers);
console.log(sampleNumbers);

// Finding first names that start with "R"
let firstNamesWithR =
    fullNames.map(n => (n.first)).filter(n => n[0] === "R");
console.log(firstNamesWithR);

let lengthNames =
    firstNames.filter(n => n.length < 7)
console.log(lengthNames);



