// inmportant array methods

const numbers = [1, 2, 3, 4, 5];

// forEach Method

numbers.forEach(function(num , i){
    console.log(`${num} * 2 = ${num*2} and ${i}`)
})

numbers.forEach((num , i) =>{
    console.log(`${num} * 4 = ${num*2} and ${i}`)
})

// map method

const squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers);

const users = [
    {firstName : "sameer"},
    {firstName : "ali"},
    {firstName : "zehra"},
    {firstName : "ahmed"},
]

const names = users.map(function(user){
 return user.firstName
})

console.log(names)

// filter method
const fiterNames = users.filter(function(user){
 return user.firstName.startsWith('a')
})

console.log(fiterNames)

const fiterNames2 = users.filter((user) =>{
 return user.firstName.length > 5
})

console.log(fiterNames2)

// reduce method



