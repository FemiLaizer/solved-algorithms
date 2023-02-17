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
console.log(sumLetters("Hello World"));