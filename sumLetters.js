<<<<<<< HEAD
function sumLetters(letters) {
    // Write your code below
    let vowel = "aeiouAEIOU"
    let value = [];
    //   console.log(letters);
    for (let i = 0; i < letters.length; i++) {

        if (vowel.includes(letters[i])) {
            //       console.log("vowel");
            value.push(1);
        } else {
            //       console.log("consonant");
            value.push(6);
        }
    }

    //   console.log(value);
    const result = value.reduce((sum, num) => sum + num, 0);
    return result;
}
console.log(sumLetters("olwafemi"));
=======
function sumLetters(letters) {
    // Write your code below
    let vowel = "aeiouAEIOU"
    let value = [];
    //   console.log(letters);
    for (let i = 0; i < letters.length; i++) {

        if (vowel.includes(letters[i])) {
            //       console.log("vowel");
            value.push(1);
        } else {
            //       console.log("consonant");
            value.push(6);
        }
    }

    //   console.log(value);
    const result = value.reduce((sum, num) => sum + num, 0);
    return result;
}
console.log(sumLetters("olwafemi"));
>>>>>>> 0d039fb0f47bf1bb49df7a29fc98acc79c69ec5d
console.log(sumLetters("Hello World"));