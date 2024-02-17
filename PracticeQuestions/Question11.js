// program to check if a number is prime or not

const number = 23;
let isPrime = true;

if (number === 1) {
    console.log("1 is neither a prime number nor composite number")
} else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
        
    }

    if (isPrime) {
        console.log(`${number} is a prime number`)
    } else {
        console.log(`${number} is a not prime number`)
    }
}

