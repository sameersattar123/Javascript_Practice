// call , apply , bind

function greet(hobby) {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.` , hobby);
}
const person1 = {
  name: 'Sameer',
  age: 23,
};
const person2 = {
  name: 'Sameer2',
  age: 232,
};

// person1.greet() // Hello, my name is Sameer and I am 23 years old.
// person1.greet.call() // Hello, my name is undefined and I am undefined years old.
// person1.greet.call(person1) // Hello, my name is Sameer and I am 23 years old.
// person1.greet.call(person2) // Hello, my name is Sameer2 and I am 232 years old.

greet.call(person1 , 'playing') // Hello, my name is Sameer and I am 23 years old. playing
greet.call(person2 , 'cricket') // Hello, my name is Sameer2 and I am 232 years old. cricket
greet.apply(person2 , ['cricket']) // Hello, my name is Sameer2 and I am 232 years old. cricket
greet.apply(person1 , ['cricket']) // Hello, my name is Sameer and I am 23 years old. cricket 
const myFunc = greet.bind(person1 , 'cricket') 
myFunc() // Hello, my name is Sameer and I am 23 years old. cricket 

// In Arrow function , this keyword means window object and this keyword is not same working as working to simple function 