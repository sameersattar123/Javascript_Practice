// program to find the sum of natural numbers using recursion

function sum(num){
    if (num > 0) {
        return num + sum(num-1)
    } else {
        return num
    }
}

const number = sum(6)
console.log(number)