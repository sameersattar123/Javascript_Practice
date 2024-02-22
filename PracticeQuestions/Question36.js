// program to loop through an object using for...in loop

const student = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
};

for (let key in student) {
  // console.log(key)
  let values = student[key];
  // console.log(values)
  console.log(`${key} - ${values} `);
}


const student2 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

for (const [key , value] of Object.entries(student2)) {
    console.log(`${key} - ${value}`)
}
