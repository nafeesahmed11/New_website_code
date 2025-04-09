const person = {
   fname : 'jhon',
   lname : 'doe',
   age : 25

}
let text = '';

for ( let x in person) {
   text += person[x];
}