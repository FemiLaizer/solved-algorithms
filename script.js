// explaining reduce metthod, how it works with function
const sumHandler = (acc, element) => {
    let val = acc + element;
    // console.log(`acc is now ${acc}`);
    // console.log(`element is now ${element}`);
    // console.log(`val is now ${val}`);
    return val;
}
let arr = [1, 2, 3];
arr.reduce(sumHandler, 0);

console.log(Math.min(...[1, 2, 4]))
console.log(Math.max(...[1, 2, 4]))

//faith day 567, -
// DOM 10 12, 14 18
// algo 9 11 13 15 16 17 19 20

//Higher Order function
function mySong(song) {
    song = "Sing Halleluyah Amen ***";
    return song;
}
function calculate(x, a) {
    x = 4, a = 9;
    return x + a;
}
/* Calling Two Functions in another function:
 singLoud calls mySong, calculate which are another function on their own
 hence we pass them into singLoud as an argument*/
function singLoud(notes, add) {
    console.log(`${notes()}, ${add()} times`);
}
singLoud(mySong, calculate);

// let div = document.querySelector(".container");
for (let i = 1; i < 101; i++) {
    let body = document.querySelector("body");
    let div = document.createElement('div')
    body.appendChild(div)
    let button = document.createElement("button");
    button.textContent = `I am button ${i}`;
    div.appendChild(button)
}
