function thirdHighestElement(array) {
  let size = array.length;
  let temp;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log("Third largest number is:: " + array[size - 3]);
}


thirdHighestElement([+-2,3,4,5,6]);