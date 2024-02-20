// program to display fibonacci sequence using recursion

function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const number = fibonacci(8);
if (number <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
  }
}
