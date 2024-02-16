// program to find the largest among three numbers

const num1 = 800;
const num2 = 13;
const num3 = 205;

if (num3 > num2 && num3 > num1) {
  console.log(`${num3} is a largest number among three numbers`);
} else if (num2 > num3 && num2 > num1) {
  console.log(`${num2} is a largest number among three numbers`);
} else {
  console.log(`${num1} is a largest number among three numbers`);
}

// 2nd Method
const largest = Math.max(num1 , num2 , num3)
console.log(`${largest} is a largest number among three numbers`)
