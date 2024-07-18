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