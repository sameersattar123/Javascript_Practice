// undefined 

let myName;
console.log(typeof myName); // undefined

// null

let Name = null;
console.log(typeof Name);  // object [error in javscript]

// bigInt

let myValue1 = 123n
let myValue2 = BigInt(33333338833)
console.log(typeof myValue1) // bigint
console.log(typeof myValue2) // bigint
console.log(myValue1 + myValue2) // 3333333333333333031620069604124830728315n