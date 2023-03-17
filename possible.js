<<<<<<< HEAD


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
=======


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
>>>>>>> 0d039fb0f47bf1bb49df7a29fc98acc79c69ec5d
console.log(possible(num))