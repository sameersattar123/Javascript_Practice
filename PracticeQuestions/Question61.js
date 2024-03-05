// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1 , arr2){
    let arr =  arr1.concat(arr2)
    let uniqueArray = []

    for (i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray
}

const arr1 = [1,1,1,1,2,3,4,4,4,4,4,5,5,5,5,5,5,5,5]
const arr2 = [6,7,7,7,7,7,8,8,8,8,9,9,9,10,1,1,1,2,2,3,4]

const newArray = getUniqueAfterMerge(arr1,arr2)
console.log(newArray)