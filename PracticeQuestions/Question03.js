// Method 01

const baseValue = 4;
const heightValue = 6;

const areaValue = (baseValue * heightValue) / 2;

console.log(`The Value of area is ${areaValue}`)

// Method 02

const side1 = 3;
const side2 = 4;
const side3 = 5;

const s = (side1 + side2 + side3) / 2;

const area = Math.sqrt((s)*(s-side1)*(s-side2)*(s-side3))

console.log(`The Value of area is ${area}`)
