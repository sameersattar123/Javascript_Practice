// string indexing

let Name = "Khalida"

console.log(Name)
 
// spaces are also include in string indexing

console.log(Name[0]) // K
console.log(Name[1]) // h
console.log(Name[2]) // a
console.log(Name[3]) // l
console.log(Name[4]) // i

// if you try to access index out of range it will give undefined

// K h a l i d a
// 0 1 2 3 4 5 6


console.log(Name[4]) // i
console.log(Name[6]) // a
console.log(Name.length) // 7
console.log(Name.length-1) // 6 
console.log(Name[Name.length-1]) // a
 