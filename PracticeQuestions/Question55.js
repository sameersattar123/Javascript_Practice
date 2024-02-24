// program to insert an item at a specific index into an array

function insertElement(array , index , element){
    for (let i = array.length; i > index; i--) {
        array[i] = array[i-1]
    }
    array[index] = element
    return array
}

const newArray = insertElement([1,2,3,4,5] , 5 ,6)
console.log(newArray)