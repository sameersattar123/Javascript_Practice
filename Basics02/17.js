// map data structures

const person = new Map()

person.set('name', 'Jack')
person.set('age', 22)
person.set('qualification', 'bscs')

console.log(person) // { 'name' => 'Jack', 'age' => 22, 'qualification' => 'bscs' }

console.log(person.get('age')) // 22

console.log(person.get('qualification')) // bscs

console.log(person.keys()) // [Map Iterator] { 'name', 'age', 'qualification' }

console.log(person.values()) // [Map Iterator]  { 'Jack', 22, 'bscs' }

for (let key  of person) {
    console.log(Array.isArray(key)) // true
}
for (let [key , value]  of person) {
    console.log(key , value) 
}


