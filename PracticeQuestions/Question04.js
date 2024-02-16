// Method 01

let num1 = 4;
let num2 = 6;

let temp = num1;
num1 = num2;
num2 = temp;

console.log(`The value of num1 is ${num1} and the value of num2 is ${num2}`);

// Method 02

let num3 = 4;
let num4 = 6;

//using destructuring assignment
[num3, num4] = [num4, num3];

console.log(`The value of num3 is ${num3} and the value of num4 is ${num4}`);
