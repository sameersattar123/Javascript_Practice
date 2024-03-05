// program to perform function overloading

function sum() {
  if (arguments.length == 0) {
    console.log("You have not passed any argument");
  } else if (arguments.length == 1) {
    console.log("Pass at least two arguments");
  } else {
    let result = 0;
    let arg = arguments.length;
    for (let i = 0; i < arg; i++) {
      result = result + arguments[i];
    }
    return result;
  }
}

console.log(sum(2, 3,5));
console.log(sum(2, 3));
console.log(sum(2));
console.log(sum());
