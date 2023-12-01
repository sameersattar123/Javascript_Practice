// console.log("S")
// console.log("A")
// console.log("M")
// console.log("E")
// console.log("E")
// console.log("R")

// function myName(){
//     console.log("S")
//     console.log("A")
//     console.log("M")
//     console.log("E")
//     console.log("E")
//     console.log("R")
// }

// myName();
// myName();

function addTwoNums( num1 , num2){
    let result = num1 + num2;
    return result
    // console.log("sameer sattar") // after return statements , any type of statements are  not executes 
}

let result = addTwoNums(7,6);
// console.log(result)

function loginUser(username){
    if (!username){
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}

let user = loginUser(222);
console.log(user);
