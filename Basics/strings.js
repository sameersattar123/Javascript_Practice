const firstName = "sameer";
const lastName = "sattar";

// console.log(firstName + " " + lastName); // not a good practice

const Name = `My full name is ${firstName} ${lastName}`;
console.log(Name);

const gameName =  new String("Sam-ee-r");
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('m'))


console.log(gameName.substring(0,3))

console.log(gameName.slice(0,3))

console.log(gameName.split('-'))

console.log(gameName.replace("-" , " "))

console.log(gameName.includes("a"))

