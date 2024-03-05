// program to pass parameter to a setTimeout() function

function greet(){
    console.log("Hello Everyone")
}

console.log('This message is shown first'); // run first
setTimeout(greet ,3000) // run after console.log


// program to pass parameter to function in setTimeout()
function greet2(x, y) {
    console.log(x);
    console.log(y);
}

console.log('This message is shown first'); // run first
setTimeout(greet2 , 2000 , "sameer" ,"sattar")