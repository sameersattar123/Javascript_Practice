// string methods

let firstName = '            Sameer       ';
console.log(firstName.length)

firstName = firstName.trim()
console.log(firstName.length) 
console.log(firstName)  // trim removes all extra spaces

let Name = "sameer sattar"
Name = Name.toUpperCase()
console.log(Name)

let Name2 = "sAmeer sAttar"
Name2 = Name2.toLowerCase()
console.log(Name2)

let Name3 = "waseem"
Name3 = Name3.slice(1,5)  // start index , end index + 1 ====> slice(0,5) give to 0 to 4 index
console.log(Name3)
