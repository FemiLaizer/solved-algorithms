

/*
convert string "this is another example"
to string "THIs Is ANOTHEr EXAMPLe"
*/

let text = 'this is also an example';

let newText = text.toUpperCase().split(' ');

newText = newText.map(word => {
    let newWord = word.slice(0, -1);
    return newWord + word.slice(-1).toLowerCase();
})

console.log(newText.join(" "));