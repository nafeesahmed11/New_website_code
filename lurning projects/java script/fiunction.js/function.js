const x ={
 fristName: "rohim",
 lastname:  " korim",
 fullName: function() {
  return this.fristName +""+ this.lastname;

 }
}
console.log(x.fullName());