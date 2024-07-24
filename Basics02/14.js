// functions

// function declaration
function findIndex(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1; // if number not found in the array
}

// function expression
const threeSum = function(num1, num2, num3) {
  return num1 + num2 + num3;
};

const arr = [2, 3, 4, 5];
const num = 5;

const findNum = findIndex(arr, num);
console.log(findNum);
const findSum = threeSum(4,5,6);
console.log(findSum);

// Arrow function
const isEven = num =>  num % 2 === 0;

const multiOfThree = num => num*3

console.log(isEven(223))
console.log(multiOfThree(3))


// hoisting

hello()
 function hello() {
  console.log('hello sameer')
}

// console.log(greet) // undefined
var greet = 'hello'


// function inside function

function outerFunction() {
  const outerVar = 'I am outer variable'

  function innerFunction() {
    console.log(outerVar)
    const inner2 = () => {
      console.log(greet) // lexical scope
    }
    inner2()
  }
  innerFunction()
}

outerFunction()


// block vs function scope

{
  let a = 880;
  console.log("Inner a " , a); // 880
  const b = 9990;
  console.log(b) // 9990
  var c = 40;
  console.log(c) // 40
}

// let and const has block scope

// console.log(a); // a is not defined
// console.log(b) // b is not defined

// var has function scope
console.log(c)  // 40  

// default prameters

function multiply(a = 4, b = 12) {
  return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(2)); // 24
console.log(multiply()) // 48

// rest parameters

function addAll(...nums) {
  // console.log(Array.isArray(nums)) // true
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
console.log(addAll(1,2,3,4,5,6,7,8,9,10))

// param destructing

const person = {
  name: 'Sameer',
  age: 30,
  city: 'New York'
}

function printPerson({ name , age , city , address}){
     console.log(name)  // Sameer
     console.log(age) // 30 
     console.log(city) // New York
     console.log(address) // undefined
}

printPerson(person)

// callback functions

function func2(name) {
  console.log('func2')
  console.log(name)
}
function func1(callBack) {
  console.log('func1')
  callBack('sameer')
}

func1(func2)

// functions returning functions

function hello2() {
  function hello1() {
    console.log('Hello Sameer')
  }
  return hello1;
}

const ans = hello2()
ans()