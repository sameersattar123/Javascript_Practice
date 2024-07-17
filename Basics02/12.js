// primitive types vs reference types

// primitive data types
let num1 = 5;
let num2 = num1;
console.log("num1", num1);
console.log("num2", num2);
num1++;
console.log("num1", num1);
console.log("num2", num2);

// referencec data types

let obj1 = { name: "Sameer" };
let obj2 = obj1;
console.log("obj1", obj1);
console.log("obj2", obj2);
obj1.name = "Sattar";
console.log("obj1", obj1);
console.log("obj2", obj2);

// clone array

let arr1 = ["item1", "item2"];
let arr2 = [...arr1];

arr1.push("item3");

console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);

// array for loop

let fruits = ["apple", "mango", "banana", "pineapple"];
let k = 0;
for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i].toUpperCase());
}

while (k <  fruits.length) {
    console.log(fruits[k])
    k++
}

// for of loop

for(let fruit of fruits){
    console.log("sameer" , fruit)
}

// for in loop

for(let key in fruits){
    console.log("sameer" , fruits[key])
}

// array destructing
const myArray = ['item1' ,'item2' ,'item3'  , 'item4' ]

let [var1 , var2 , ...newArray] = myArray

console.log('value of var1 ' ,var1)
console.log('value of var2 ' ,var2)
console.log(newArray)
