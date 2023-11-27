const score = 100;
console.log(score);

const otherNumber = new Number(200);
console.log(otherNumber);

const balance = 334.54;
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toString().replace(300,600))
console.log(balance.toString().includes(300))

console.log(balance.toFixed(2)) // 300.00
console.log(balance.toPrecision(3)) // 335

const amountNumber = 100000;
console.log(amountNumber.toLocaleString('en-IN'))

// *************** Maths ************************

console.log(Math)
console.log(Math.abs(-9)) // 9
console.log(Math.round(4.2)) // 4
console.log(Math.round(4.9)) // 5
console.log(Math.ceil(4.3)) // 5
console.log(Math.floor(4.6)) // 4
console.log(Math.sqrt(64)) // 8

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const max = 100;
const min = 200;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


