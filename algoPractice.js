
function rotateLeft(arr, n) {
    const elem = arr.splice(0, n);
    arr.push(...elem);
    return arr;
}
console.log(rotateLeft([1, 2, 3, 4], 2));

function rotateLeft1(arr, n) {
    for (let i = 0; i < n; i++) {
        const elem = arr.shift();
        arr.push(elem);
    }
    return arr;
}
console.log(rotateLeft1([1, 2, 3, 4], 2));

const distincArray = ["a", 1, 4, "b", 1, "4", 4, "2"];
const newArr = [...new Set(distincArray)];
console.log(newArr);

function returnNew(distinc) {
    let uniqueArray = [];
    for (let i = 0; i < distinc.length; i++) {
        if (!uniqueArray.includes(distinc[i]))
            uniqueArray.push(distinc[i])
    }
    return uniqueArray;
}
console.log(returnNew(distincArray));

function useObject(dis) {
    let obj = {};
    for (let i = 0; i < dis.length; i++) {
        if (!obj[dis[i]]) {
            obj[dis[i]] = 1;
        } else {
            obj[dis[i]]++;
        }
    }
    console.log(obj)
    // return Object.values(obj);
    return Object.keys(obj);
}
console.log(useObject(distincArray));

function tribonacci(signature, n) {
    //your code here
    for (let i = 0; i < n; i++) {
        let f0 = signature[i], f1 = signature[i + 1], f2 = signature[i + 2];
        signature.push(f0 + f1 + f2);
    }
    return signature.slice(0, n);
}
console.log(tribonacci([1, 1, 1], 10))

function longestConsec(strarr, k) {
    let result = [];
    for (let i = 0; i < strarr.length; i++) {
        let elem = "";
        elem += strarr[i] + strarr[i + 1];
        result.push(elem);
    }

    for (let j = 0; j < result.length; j++) {
        if (result[j].length > result[j + 1].length) {
            return result[j];
        } else if (k <= 0 || k > result.length || result.length === 0) {
            return "";
        }
    }

}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));

function mutation(arr) {
    let arr1 = arr[0].toLowerCase(),
        arr2 = arr[1].toLowerCase(), check = [];
    for (let i = 0; i < arr2.length; i++) {
        arr1.includes(arr2[i]) ?
            check.push('t') : check.push('f');
    }
    return check.includes('f') ? false : true;
}
console.log(mutation(["Noel", "Ole"]));
/*
function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split('').sort().join('')
    let arr2 = arr[1].toLowerCase().split('').sort().join('')
        let check = []
        for (let i = 0; i< arr2.length; i++){
            if(arr1.includes(arr2[i])){
                check.push('t')
            }
            else{
                check.push('f')
            }
        }
     if(check.includes('f')){
         return false
     }else{
         return true
     }
   }
   
   mutation(["Noel", "Ole"]);
   */

function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        const chuck = arr.slice(i, i + size);
        result.push(chuck);
    }
    return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

const s = [5, 7, 2];
s.sort();
s

function numSwap(number) {
    let num = String(number).split(""), res = [];
    for (let i = 0; i < num.length; i++) {
        console.log(num.indexOf(num[i]))
    }
    res;
}
console.log(numSwap(1234)) //to return 2143
// console.log(numSwap(432156)) //to return 341265

