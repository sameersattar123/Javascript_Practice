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


// closures

function one(){
    const name = "sameer";
    function two(){
        const website = "youtube"
        console.log(name)
    }
    // console.log(website) // out of scope , we cannot used any keyword
    two();
}
one();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
     // console.log(website); // out of scope , we cannot used any keyword
}

// console.log(username);

// ************************ Interesting mini concept of hositing **********************

console.log(addOne(2)); // 3
function addOne(num){
    return num + 1;
}

console.log(addTwo(4)); // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}