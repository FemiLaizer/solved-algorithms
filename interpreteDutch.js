
// Do not modify the dictionary below
const deutschDict = {
    er: 'he',
    sie: 'she',
    es: 'it',
    du: 'you',
    ich: 'I',
    wir: 'we',
    ihr: 'you',
    brot: 'bread',
    ein: 'a',
    eine: 'a',
    frau: 'woman',
    mann: 'man',
    kind: 'child',
    madchen: 'girl',
    junge: 'boy',
    bist: 'are',
    bin: 'am',
    ist: 'is',
    und: 'and',
    wasser: 'water',
};
// Do not modiy the dictionary above

function deutschTranslator(sentence) {
    // Write your code here
    let result = "";
    let wordArray = sentence.split(" ");
    wordArray.forEach(item => {
        for (word in deutschDict) {
            if (item === word)
                result += `${deutschDict[word]} `;
        }
    })
    return result.trim(" ");
}
console.log(deutschTranslator('du bist ein kind'));