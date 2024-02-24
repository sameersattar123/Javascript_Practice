// program to check if an object is an array

function checkArray(arr){

    const result = Array.isArray(arr)
    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }
}

checkArray([1,2,3,4])