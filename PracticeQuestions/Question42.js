// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomString(length){
    let result = ''
    let charLength = characters.length

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLength))
    }

    return result
}

const result = generateRandomString(5)
console.log(result)

// Method 2

const result2 = Math.random().toString(36).substring(2,10)
console.log(result2)