// program to check whether the last digit of three numbers is same 

const a = 8;
const b = 18;
const c = 28;

const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

if (result1 == result2 && result1 == result3) {
    console.log(`${a} ${b} and ${c} have same last digit`)
} else {
    console.log(`${a} ${b} and ${c} have different last digit`)
}
