// program to check if a number is a float or integer value

function checkNumber(x) {
  if (typeof x == "number" && !isNaN(x)) {
    if (Number.isInteger(x)) {
      console.log(`${x} is integer.`);
    } else {
      console.log(`${x} is a float value.`);
    }
  } else {
    console.log(`${x} is not a number`);
  }
}

checkNumber(3)
checkNumber(3.5)
checkNumber("Hello World")
