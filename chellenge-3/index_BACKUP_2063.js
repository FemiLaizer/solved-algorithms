<<<<<<< HEAD
// import "./style.css";
// Write your code below this line.

// TODO (see instructions)

// Select the h1 element and Increment by 5, and Decrement if Even buttons on the page.
// You might require the document.querySelector or document.getElementById function
// Add event listeners to both buttons and write the logic to increment the content in the Paragraph element
// You might require the paragraph.textContent property and the button.addEventListener method.

let counter = document.querySelector("#counter");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
let count = 0;

// const increase = () => {
//     count += 5;
//     counter.textContent = count;
// }
// increment.addEventListener("click", increase);

// decrement.onclick = () => {
//     if (count % 2 === 0) {
//         count--;
//         counter.textContent = count;
//     }
// }

function checkCount(e) {
    if (e.currentTarget.id == "increment") {
        count += 5;
        counter.textContent = count;
    }
    else if (e.currentTarget.id == "decrement") {
        if (count % 2 === 0 && count !== 0) {
            count -= 1;
            counter.textContent = count;
        }
    }
}
increment.addEventListener('click', checkCount)
decrement.addEventListener('click', checkCount)
=======
// import "./style.css";
// Write your code below this line.

// TODO (see instructions)

// Select the h1 element and Increment by 5, and Decrement if Even buttons on the page.
// You might require the document.querySelector or document.getElementById function 
// Add event listeners to both buttons and write the logic to increment the content in the Paragraph element
// You might require the paragraph.textContent property and the button.addEventListener method.

let counter = document.querySelector("#counter");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
let count = 0;

const increase = () => {
    count += 5;
    counter.textContent = count;
}
increment.addEventListener("click", increase);

decrement.onclick = () => {
    if (count % 2 === 0) {
        count--;
        counter.textContent = count;
    }
}
>>>>>>> 0d039fb0f47bf1bb49df7a29fc98acc79c69ec5d
