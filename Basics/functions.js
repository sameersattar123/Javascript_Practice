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

myName();
myName();

function addTwoNums( num1 , num2){
    let result = num1 + num2;
    return result
    // console.log("sameer sattar") // after return statements , any type of statements are  not executes 
}

let result = addTwoNums(7,6);
console.log(result)

function loginUser(username){
    if (!username){
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}

let user = loginUser(222);
console.log(user);

function calculatePrices(...num1){ // "..." rest operators
    return num1;
}

let prices = calculatePrices(344,566,2,33);
console.log(prices)

let myObj = {
    userName : "sameer",
    seatNum : 233333
}
function userInfo(anyObj){
    return `my name is ${anyObj.userName} and my Seat Num is ${anyObj.seatNum}`
}

let userDetails = userInfo(myObj);
console.log(userDetails);

let myArray = [233,444,1111,3333,111111,2]

function userNumbers(anyArray){
    return anyArray[3]
}

let userNumber = userNumbers(myArray);
console.log(userNumber);

