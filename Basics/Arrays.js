// array

let newArray1 = [2,3,4,5,6,7];
console.log(newArray1);

let newArray2 = [ "sameer" , "sattar" , "shaikh"];
console.log(newArray2);

let newArray3 = new Array(52,323,24,52,26,27);
console.log(newArray3);

newArray1.push(8);
console.log(newArray1);

newArray1.pop();
console.log(newArray1);

newArray1.unshift(1);
console.log(newArray1);

newArray1.shift();
console.log(newArray1);

const newArray = newArray1.join();
console.log(newArray); // 2,3,4,5,6,7

const array2 = newArray1.slice(1,3);
console.log(array2); // [3,4]
console.log(newArray1); // [2,3,4,5,6,7]

const array1 = newArray1.splice(1,3);
console.log(array1); // [3,4,5]
console.log(newArray1); //  [2,6,7]



