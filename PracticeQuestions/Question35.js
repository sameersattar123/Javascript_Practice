// program to clone the object
// declaring object

const person = {
    name: 'John',
    marks: { math: 66, english: 73},
    age: 21,
}

let clonePerson = {...person}

console.log(person)
console.log(clonePerson)

clonePerson.name = "sameer sattar"
clonePerson.age = 67;
clonePerson.marks.english = 67;

console.log(person.name)
console.log(clonePerson.name)
console.log(clonePerson.marks.english)
