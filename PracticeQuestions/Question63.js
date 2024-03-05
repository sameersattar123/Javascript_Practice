// program to extract value as an array from an array of objects

function extractValue(arr , prop){
    const exactValue = arr.map((item) => item[prop])

    return exactValue
} 

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'b');
console.log(result);
