// program to pass a function as a parameter

function greet(){
    return "Hello"
}

function anotherGreet(user,func){
    let message = func()
    console.log(`${message} ${user}`)
}

anotherGreet("sameer sattar" ,greet)