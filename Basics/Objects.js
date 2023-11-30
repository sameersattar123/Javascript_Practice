const mySymbol = Symbol("key1");

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
