function longString(names){
 let longWord = ""; 
   for(nam of names){
     if(nam.length > longWord.length){
      longWord =nam;
     }
 }
 return [longWord, names.indexOf(longWord)];
}
console.log(longString(["Sumit Saha", "Learn with Sumit", "akash", "Saad", "Daiyan"]));