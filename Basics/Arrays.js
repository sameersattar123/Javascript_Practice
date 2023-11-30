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

const heros1 = ["ali" , "kashif" , "waheed"]
const heros2 = ["ali1" , "kashif2" , "waheed2"]

 heros1.push(heros2);

console.log(heros1);
console.log(heros1[3][1]); // Not a good practice to marrage the two array

const newHeros = heros1.concat(heros2);
console.log(newHeros); // concat return a new array but this is also a not a good practice

const allNewHeros = [...heros1 , ...heros2];
console.log(allNewHeros); // this is good practice to marrage two arrays 
console.log(allNewHeros[5]);

const anotherArray = [2 ,3 ,  4, 5 , [4 ,5, 6 ,3,2 ,2,5] , [5 , [7,8, 9] , [6,7,8]]] 
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray[15]) 


const checkArray1 = Array.isArray("sameer"); // false
console.log(checkArray1)

const checkArray2 = Array.isArray([2,3,4,5,6,7]); // true
console.log(checkArray2)

const convertIntoArray1 = Array.from("SAMEERSATTAR"); 
console.log(convertIntoArray1);  // ['S', 'A', 'M', 'E','E', 'R', 'S', 'A','T', 'T', 'A', 'R']

const convertIntoArray2 = Array.from({
    name : "sameer"
});
console.log(convertIntoArray2); // interesting case // []

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1 , score2 , score3)); // [100 ,200 ,300]