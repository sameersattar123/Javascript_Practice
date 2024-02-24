// program to add element to an array

function addElement(array , element){
    array = [element , ...array]
    return array
}

const array = [1,2,3,4,5,6]
console.log(array)
const newArray = addElement(array , 0)
console.log(newArray)