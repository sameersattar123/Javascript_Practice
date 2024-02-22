// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

const newObj1 = Object.assign(person ,student) // The Object.assign() method returns an object by copying the values of all enumerable properties from one or more source objects
const newObj2 = {...person , ...student} // two objects are merged together using the spread operator 

console.log(newObj1)
console.log(newObj2)