// introduction of sets
// set contain only unique elements
// set has no indexing
// no order
// set are iterable (for of loop apply)

const uniqueElements = new Set([1, 2, 3, 4, 5, 6, 7]);
console.log(uniqueElements); // { 2, 3, 4, 5, 6, 7 }

// add element to set

uniqueElements.add(8);
console.log(uniqueElements);

// remove element from set

uniqueElements.delete(5);
console.log(uniqueElements);

// check if an element exists in set
if (uniqueElements.has(1)) {
  console.log("yes");
} else {
  console.log("no");
}

for (const element of uniqueElements) {
    console.log(element)
}
