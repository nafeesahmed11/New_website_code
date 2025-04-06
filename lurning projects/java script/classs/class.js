class Car {
 constructor(brand,year ) {
   this.carName = brand;
   this.carYear = year;
 }
 play(){
console.log (`car name is ${this.carName},the year  is ${this.carYear}`);
 }
}

const myCar = new Car("Ford", 1994);
const myCar2 = new Car("Ford", 2024);
myCar.play();
myCar2.play();
