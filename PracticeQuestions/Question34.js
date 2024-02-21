// program to check if a key exists

const person1 = {
    id: 1,
    name: 'John',
    age: 23
}

let hasKey = "name" in person1

if (hasKey) {
    console.log("The key exists")
} else {
    console.log('The key does not exist.');
}

// method 2

const person2 = {
    id: 1,
    name: 'John',
    age: 23
}

if (person2.hasOwnProperty("name")) {
    console.log('The key exist.');
} else {
    console.log('The key does not exist.');
}
