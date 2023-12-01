let a = 10;
const b = 20;
var c = 30;

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