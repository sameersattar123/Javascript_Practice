// hoisting

// console.log(myFunction1) // [Function: myFunction]


// function declaration
function  myFunction1(){
   console.log("this is a function")
}

// console.log(myFunction2)  // undefined

// function expression (case : var)
var myFunction2 = function (){
   console.log("this is a function")
}

// console.log(myFunction2) // [Function: myFunction]


// console.log(myFunction3) //  Cannot access 'myFunction3' before initialization

let myFunction3 = function (){
    console.log("this is a function")
}

// console.log(myFunction4) //  Cannot access 'myFunction4' before initialization

let myFunction4 = function (){
    console.log("this is a function")
}



