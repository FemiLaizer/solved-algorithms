function hideAfter(str, after) {
    // Write your code here
    const n = str.length; let result = "";
    //   console.log(str);
    for (let i = 0; i < n; i++) {
        if (i <= after) {
            result += str[i];
        } else {
            result += "*";
        }
    }
    //   console.log(result);
    return result;
}
console.log(hideAfter("decadev", 3));
console.log(hideAfter("Hello World", 0));
console.log(hideAfter("password", -1));