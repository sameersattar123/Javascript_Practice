// program to count the number of keys/properties in an object

const student = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
};

let count = 0;

for (const key in student) {
  ++count;
}
console.log(count);

const result = Object.keys(student).length; // the Object.keys() method and the length property are used to count the number of keys in an object.
console.log(result);
