// program to empty an array

function emptyArray(array){
    // array.length = 0
    array = []
    return array
}

const array = [1,2,3,4,5,6]
console.log(array)
const newArray = emptyArray(array)
console.log(newArray)