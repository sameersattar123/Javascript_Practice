// Dates 

const myDates = new Date();
console.log(myDates) // 2023-11-27T21:51:28.374Z


console.log(typeof myDates) // object

console.log(myDates.toString()) // Tue Nov 28 2023 02:51:28 GMT+0500 (Pakistan Standard Time)

console.log(myDates.toLocaleString()) // 11/28/2023, 2:52:11 AM

console.log(myDates.toLocaleDateString()) // 11/28/2023

console.log(myDates.toLocaleTimeString()) // 2:53:16 AM

console.log(myDates.toISOString()) // 2023-11-27T21:53:49.195Z

let myCreatedDate =   new Date(2023, 0, 23)
myCreatedDate =   new Date(2023, 2, 23 , 5, 3)
myCreatedDate =   new Date("2023, 02, 23 ")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

const newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

