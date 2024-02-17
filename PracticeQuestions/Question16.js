// program to display the sum of natural numbers

let number = 10;
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i; // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
}
console.log(sum);

// program to display the sum of all even numbers

let number1 = 10;
let sum1 = 0;

for (let i = 1; i <= number1; i++) {
  if (i % 2 == 0) {
    sum1 += i; // 0 + 2 + 4 + 6 + 8 + 10
  }
}
console.log(sum1);
// program to display the sum of all odd numbers

let number2 = 10;
let sum2 = 0;

for (let i = 1; i <= number2; i++) {
  if (i % 2 != 0) {
    sum2 += i; // // 1 + 3 + 5 + 7 + 9
  }
}
console.log(sum2);
