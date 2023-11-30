const mySymbol = Symbol("key1");

// Object literals
const myObj = {
    [mySymbol] : "sameer",
    name : "sameer",
    isLogged : false,
    friends : ["ali" , "gaffar"],
    gmail : "sameer@gmail.com"
}

console.log(myObj.friends)
console.log(myObj["friends"])
console.log(myObj["gmail"])
console.log(myObj["isLogged"])
console.log(myObj["name"])
console.log(myObj[mySymbol]);
console.log(typeof myObj[mySymbol]);
console.log(myObj)

myObj.greeting = function(){
    console.log("Hello")
}
myObj.greetingTwo = function(){
    console.log(`my name is ${this.name}`)
}

console.log(myObj.greeting())
console.log(myObj.greetingTwo())
console.log(myObj)

// Singleton (Object by constructor)
let newObjec1 = new Object();
// object literals
let newObjec2 = {
    name : "sameer",
    email : "sameer@gmail.com"
};
newObjec2.email = "sameergoogle123.com"
console.log(newObjec2["email"])

let obj1 = { a : 1 , b : 2 , c : 3}
let obj2 = { s : 1 , a : 2 , j : 3}
let obj3 = { d : 1 , h : 2 , g : 3}

let newObj1 = {obj1 , obj2 , obj3};
console.log(newObj1)

let newObj2 = Object.assign({},{obj1 , obj2 , obj3});
console.log(newObj2)

let newObj3 = {...obj1 , ...obj2 , ...obj3}; // way to marrage one or more objects into one object (best practice)
console.log(newObj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(myObj))
console.log(Object.values(myObj))
console.log(Object.entries(myObj)) // convert object into array

console.log(myObj.hasOwnProperty('name'));

// destructing

let courses = {
    name1 : "react",
    name2 : "vue",
    name3 : "angular",
}

const {name1: course1 , name2: course2} = courses
console.log(course1 , course2)

