// arrays

let fruits = ["mongo" , "banana" , "apple"]

console.log(fruits)

fruits[1] = 'pineapple'

console.log(fruits)
console.log(typeof fruits) // object
console.log(Array.isArray(fruits)) // true
console.log(fruits[2])
console.log(fruits[0])

// arrays methods

fruits.push('green')
console.log(fruits)
let newFruits = fruits.pop()
console.log(fruits)
console.log(newFruits)

fruits.unshift('green')
console.log(fruits)
let perFruits = fruits.shift()
console.log(fruits)
console.log(perFruits)