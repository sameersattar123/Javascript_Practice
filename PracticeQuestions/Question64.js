// program to extract value as an array from an array of objects

function compareArrays(arr1 , arr2){

    // check the length
    if (arr1.length !== arr2.length) {
        return false
    } else {
        let result = false;

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                result = true
            } else {
               return result
            }
        }
        return result
    }
}

const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

const result = compareArrays(array1, array2);

// if result is true
if(result) {
    console.log('The arrays have the same elements.');
}
else {
    console.log('The arrays have different elements.');
}