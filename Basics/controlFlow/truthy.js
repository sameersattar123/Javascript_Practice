let email = "sameer@gmail.com"

if (email) {
    console.log("got user email")
} else {
    console.log("git not user email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const myObj = {};

if (Object.keys(myObj).length === 0) { // convert into array
    console.log("this is an empty object ")
} else {
    console.log("this is not an empty object ")
}

const myArray = [];

if (myArray.length === 0) { 
    console.log("this is an empty array ")
} else {
    console.log("this is not an empty array ")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = null ?? 10;
val1 = 10 ?? undefined;
val1 =  undefined ?? 10 ?? 20;

console.log(val1); // 10

// Terniary Operator

// condition ? true : false

let checkEmail = "sameer@gmail.com"

checkEmail == "sameer@gmail.com" ? console.log("true") : console.log("false")