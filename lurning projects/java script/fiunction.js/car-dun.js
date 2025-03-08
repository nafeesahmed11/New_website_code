const car={
 name:"volvo",
 model: 300,
 color: "blue",
 start: function(){
  console.log("car has started");
 },
 stop: function(){
  console.log("car has stop");
 },
};
console.log(car.model);
car.start();