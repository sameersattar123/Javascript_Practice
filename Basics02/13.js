// intro to objects

const key = "email"
const obj1 = {
    name : "sameer",
    age : 22,
    hobbies : ['playing' , 'sleeping']
}

// console.log(obj1.hobbies)
// console.log(obj1.hobbies[0])
// console.log(obj1.hobbies[1])
obj1[key] = 'sameersattar@gmail.com'
obj1.name2 = "sattar"
// console.log(obj1)
// console.log(obj1["person hobbies"][1])

// for (const key in obj1) {
//     console.log(obj1[key])
// }

const newArr = Array.isArray(Object.keys(obj1)) // true


const key1 = 'objkey1'
const key2 = 'objkey2'
const value1 = "myvalue1"
const value2 = "myvalue2"

const obj2 = {
    [key1] : value1,
    [key2] : value2
}

console.log(obj2)

// spread operator in js
const obj4 = {
    name1 : "sameer"
}
const obj5 = {
    name2 : "daniyal"
}
const obj3 ={...obj4 , ...obj5}

// console.log(obj3)

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

for (const user of users) {
    console.log(user.gender)
}

const [{firstName : personName} ,  , {gender : personGender} ] = users
console.log(personGender)