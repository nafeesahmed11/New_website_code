function liserch(arr, val) {
 const len = arr.length ;
   for (let i = 0; i < len ; i++ ){
    if(arr[i] === val){
     return i+1;
    }
 }
 return "not found";
}
console.log(liserch(["a","b","c","d","e"],'a'));