//  for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6];

for (const i of arr) {
    console.log(i);
}

const greeting = "Sameer Sattar";

for (const greet of greeting) {
    console.log(greet);
}

// Maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

for (const [key , value] of map) {
    console.log(value)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key,value] of myObject) {
    // console.log(value)  // myObject is not iterable
}