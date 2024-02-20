// program to sort words in alphabetical order

const sentence = "I am learning JavaScript";

const words = sentence.split(" ");

// console.log(words)

words.sort();

console.log("The sorted words are:");

words.forEach((element) => {
  console.log(element);
});
