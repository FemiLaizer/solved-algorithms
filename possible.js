

const num = [1,2,3]

const possible = (num) =>{
let n = num.length, x = 0;
let arr = [], result = [];
  
for(let i = 0; i < n; i++){
  arr.push(num[x]);    
  x++;
 for(let j= 0; j < n; j++){ 
    result.push(arr)
 } 
}  
 return result;
}
console.log(possible(num))