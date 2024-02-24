// program to remove duplicate value from an arra

function getUnique(arr){
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

const array = [1,2,3,4,5,6,7,8,9,3,2,1,4,5,6 ,5,5,5,5,5 ,10]
console.log(array)
const newArray = getUnique(array)
console.log(newArray)