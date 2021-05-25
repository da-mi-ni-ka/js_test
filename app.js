"use strict";

// const arr = [1, 3, 4, 145, 24, 54, 56, 8, 9];

// const disabledArr = [3, 145, 54];

// function filterByArray(arr, numbersToFilterArr) {
//   return arr.filter((element) => {
//     return !numbersToFilterArr.includes(element)
//   })
// }

// const result = filterByArray(arr, disabledArr);

// console.log(result);


// 20.05

// function sum (x) {
//   return function (y) {
//     return x + y;
//   }
// }

// function sum(x) {
//   let result = x; 

//   const nestedSum = function(n) {
//     result += n
//     return nestedSum;
//   }
// }

// console.log(sum(1)(2)(3));
// console.log(sum(3)(5)(6)(8));


// function Chair({legs, color, isSoft, hasBack, size}) {
//   if (!size || size < 1 || size > 5) {
//     throw new Error("Size must be between 1 and 5");
//   }

//   this.legs = legs;
//   this.color = color;
//   this.isSoft = isSoft;
//   this.hasBack = hasBack;
//   this.size = size;
  
// }

// console.log(new Chair(options: {
//   legs: 4;
//   color: "red";
//   isSoft: true;
//   hasBack: true;
//   size: 3;
// });
// --------------------------------

// const Cat {
//   name: "Murzik";
//   sex: "male";
//   isHungry: true;
// }
// const {name: catName, sex: catSex, isHungry: catIsHungry} = Cat;



// function Car(name, year, color) {
//   this.name = name;
//   this.year = year;
//   this.color = color;

//   this.changeColor = function (newColor) {
//       this.color = newColor;
//   }
// }

// let car = new Car('BMW', 2012, 'red');
// car.changeColor('black');

// class Car {
//   constructor(name, year, color) {
//     this.name = name;
//     this.year = year;
//     this.color = color;
//   };
  
//   changeColor(newColor) {
//       this.color = newColor;
//   }
// };

// const car = new Car('BMW', 2012, 'red');
// console.log(car);
// car.changeColor('black');
// console.log(car);

// ---------------------------------


// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getInfo() {
//     `${this.name} + ${this.age}`
//   }
// }
// const person = new Person("Johns", 34);
// console.log(person);

// ----------------------------------------


// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(this.name + " says Hi");
//   }
// };
// class Cat extends Animal {
//   speak() {
//     console.log(this.name + " meows");
//   }
// }
// const cat = new Cat("Murzik");
// cat.speak();


// ----------------------------------------



class Ball {
  constructor(smth){
    this.ballType = smth || "regular";
  }
}

const ball1 = new Ball();
console.log(ball1);

const ball2 = new Ball("superBall");
console.log(ball2);

