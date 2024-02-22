// program to clone the object
// declaring object

const person = {
    name: 'John',
    age: 21,
}

let clonePerson = {...person}

console.log(person)
console.log(clonePerson)

clonePerson.name = "sameer sattar"
clonePerson.age = 67;

console.log(person.name)
console.log(clonePerson.name)
