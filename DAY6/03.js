let arr = [1,2,3,4,5];
let newarr = arr.map(arr => 2*arr);
console.log(newarr)

// map is used to modify the array 
// filter is used to select specific ele from the array

let filtered = arr.filter(arr => arr%2===0);
console.log(filtered)

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);