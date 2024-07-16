// if else condition 

// falsy values

// false
// undefined
// null
// 0
// ""

let age = null;

if (age) {
    console.log(age)
} else {
    console.log('empty')
}

// truthy values
// "abc" , 1 , -1


let carName = 'cocrola'
let carPrice = 2222

if (carName[0] === 'c' && carPrice === 2222) {
console.log("this car is so expensive")
} else {
    console.log("this car is not so expensive")
}

// winning game

let winningNum  = 19


if (winningNum === 19 ) {
    console.log("correct")
} else {
    if (winningNum < 17) {
        console.log('to less')
    } 
    if (winningNum >20) {
        console.log('to big')
    }
}

// tentary opertors || conditional operators

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome" : "Please Sign up first"
console.log(message)