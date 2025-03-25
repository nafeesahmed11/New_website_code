const numbers = [5, 10, 15];
const newArray = numbers.map((num, index) => `Index ${index}: ${num * 2}`);
console.log(newArray);

let x = numbers.filter(check());

function check(age){
 return age >= 10;
};

console.log(x);
