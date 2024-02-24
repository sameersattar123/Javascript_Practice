// program to append an object to an array

function insertObject(arr , obj){
    // arr.push(obj); // another way to insert object into array
    arr = [...arr , obj]
    return arr
}

const newArray = insertObject([1,2,3,4,5] , {
    name : "sameer"
})

console.log(newArray)