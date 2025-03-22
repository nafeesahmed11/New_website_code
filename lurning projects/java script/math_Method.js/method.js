let x=Math.random();
console.log(x);

console.log("--------------");

let y=Math.floor(Math.random()*10)+1;
console.log(y);

console.log("--------------");

// both max and min both include in this turm

function getRandom(max,min){
 return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandom(6,1));