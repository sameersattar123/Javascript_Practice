// program to find the factorial of a number

function factorial(x){
    if (x == 0) {
       return 1 
    }

    return x * factorial(x-1)
}

const num = 0
if (num < 0) {
    console.log("Enter the Positive Number")
} else {
    console.log(factorial(num))
}