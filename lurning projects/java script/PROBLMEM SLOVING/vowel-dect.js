const vow=['a','e','i','o','u'];
function countVow(sentence){
 let conunt = 0;
 const letter=Array.from(sentence);
 

letter.forEach(function(value){
 if(vow.includes(value)){
  conunt++;

 }
});
return conunt;
};
console.log(countVow("I Love Bangladesh"));
// console.log(conunt);