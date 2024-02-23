// program to display the date and time

const date = new Date()

const n = date.toDateString()

const time = date.toLocaleTimeString()

console.log(`Date: ${n} and Time: ${time}`)