const max = 20;
const min = 2;

const randomValues = Math.floor(Math.random()* (max-min +1)) + min

console.log(`Random value between ${min} and ${max} is ${randomValues}`);