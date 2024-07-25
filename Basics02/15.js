// inmportant array methods

const numbers = [1, 2, 3, 4, 5];

// forEach Method

numbers.forEach(function(num , i){
    console.log(`${num} * 2 = ${num*2} and ${i}`)
})

numbers.forEach((num , i) =>{
    console.log(`${num} * 4 = ${num*2} and ${i}`)
})

// map method

const squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers);

const users = [
    {firstName : "sameer"  , price : 400},
    {firstName : "ali" , price : 200},
    {firstName : "zehra" , price : 100},
    {firstName : "ahmed" , price : 2000},
]

const names = users.map(function(user){
 return user.firstName
})

console.log(names)

// filter method
const fiterNames = users.filter(function(user){
 return user.firstName.startsWith('a')
})

console.log(fiterNames)

const fiterNames2 = users.filter((user) =>{
 return user.firstName.length > 5
})

console.log(fiterNames2)

// reduce method

const sum = numbers.reduce((accumaltor , currentValue) => {
       return accumaltor + currentValue
} , 0)

console.log(sum)

const totalPrice = users.reduce((totalValue , currentValue) => {
       return totalValue + currentValue.price
} , 0)

console.log(totalPrice)

// sort method

const prices = [4,500,74,33,2]

// if a- b  then ascending order
// if b - a  then descending order

prices.sort((a,b) => {
    return a - b;
})

console.log(prices)
prices.sort((a,b) => {
    return  b - a;
})

console.log(prices)

users.sort((a , b) => {
    return a.price - b.price;
})

console.log(users)
users.sort((a , b) => {
    return b.price - a.price;
})

console.log(users)

// find method

const findSingleUser = users.find((user) => user.firstName === 'ali')
console.log(findSingleUser)

// every method

const checkAllUser = users.every((user) => user.price > 100)
console.log(checkAllUser) // false

// some method

const checkUser = users.some((user) => user.price > 100)
console.log(checkUser) // false

// fill method

let newArray = new Array(10).fill(2)
console.log(newArray)

// fill method ===> value , start , end + 1

newArray.fill(5 , 2 , 5)

console.log(newArray)


// splice method
// ==> start , delete , insert

let strArr = ["a", "b", "c", "d", "e"]

strArr.splice(2, 3)  // ( starting from 2 index , and delete 3 items)

console.log(strArr)

let numArr = [2,4,5,6,7,8,9]

numArr.splice(2 , 3)  // ( starting from 2 index , and delete 3 items)

console.log(numArr)

numArr.splice(2 , 0)  // ( starting from 2 index ,  and delete 0 items)

console.log(numArr)

numArr.splice(2,0,3) // ( starting from 2 index , and delete 0 items , and insert 3 at 2 index )

console.log(numArr)