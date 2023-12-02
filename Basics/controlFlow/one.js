// if
let isUserLoggedIn = true;
let temperature = 41;

if (temperature === 40) {
    console.log("less than 40")
} else {
    console.log("equals to 41") 
}

// <, >, <=, >=, ==, !=, ===, !==

let score = 500;

if (score >= 500) {
    const power = "fly"
    console.log(`${power}`) 
}
// console.log(`${power}`)  // not accessable

let balance = 1000;

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && !loggedInFromGoogle && loggedInFromEmail) {
    console.log("Logged in")
} else {
    console.log("not logged in")
}