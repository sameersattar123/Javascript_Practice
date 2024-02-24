// program to remove item from an array

function removeElementFromArray(array, n) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== n) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let newArray = removeElementFromArray(
  [1, 2, 3, 4, 5, 7, 8, 9, 5, 3, 2, 1, 1, 3, 43, 5, 6, 6, 6],
  6
);
console.log(newArray);
