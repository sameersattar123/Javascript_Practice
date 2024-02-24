// program to check if an array contains a specified value

function checkSpecificValue(array , value){
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            console.log('Array contains a value.');
            break
        } else {
            console.log('Array does not contain a value.');
        } 
    }
}

checkSpecificValue([1,2,3,4,5,6] ,6)
