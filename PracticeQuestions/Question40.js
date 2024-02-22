// program to replace all occurrence of a string

const string = 'Mr red has a red house and a red car';
// console.log(string.split("red"))

const result = string.split('red').join("blue")

console.log(result)

// The string is split into individual array elements using the split() method.
// Here, string.split('red') gives ["Mr ", " has a ", " house and a ", " car"] by splitting the string.
// Here, reverseArray.join('blue') gives Mr blue has a blue house and a blue car by joining the array elements.


// Method 2 using regex expression

// program to replace all occurrence of a string

const string2 = 'Mr Red has a red house and a red car';

const regex = /red/gi

const result2 = string.replace(regex,'blue')

console.log(result2)

// a regex expression is used as the first parameter inside the replace() method.

// /g refers to global (that replacement is done across the whole string) and /i refers to case-insensitive.

// The replace() method takes the string that you want to replace as the first parameter and the string you want to replace with as the second parameter.

