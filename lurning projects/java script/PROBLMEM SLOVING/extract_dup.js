const num = [1,2,3,4,4,5,5,6,7,8,9,10];

const dup= num.filter(nafs());
console.log(dup)

function nafs(value,index, array){
 
 return array.indexOf(value) ===index ;

}