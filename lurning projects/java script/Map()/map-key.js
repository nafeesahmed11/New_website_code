
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//List all Keys
let text = "";
for (const x of fruits.keys()) {
  text += x + "<br>";
}

