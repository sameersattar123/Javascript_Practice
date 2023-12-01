let a = 10;  // let key word has block scope
const b = 20; // const key word has block scope
var c = 30; // var key word has global scope

console.log("Outer a " , a);
console.log("Outer b " , b);
console.log("Outer c " , c);

{
    let a = 880;
    console.log("Inner a " , a);
    const b = 9990;
    console.log("Inner b " , b);
    var c = 40;
    console.log("Inner b " , c);

}

console.log("Outer a " , a);
console.log("Outer b " , b);
console.log("Outer c " , c);  