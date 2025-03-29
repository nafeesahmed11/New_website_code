const fruits = new Map([
 ["apples", 500],
 ["bananas", 300],
 ["oranges", 200]
]);

console.log(fruits.get("apples"));
console.log("...................");

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value + "||"
})
console.log(text);
