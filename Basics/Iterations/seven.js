const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumers.map((num) => num * 10).map(num => num + 1); // map method with filter (condition) method

console.log(newNumbers);    //  [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]
