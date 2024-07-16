// while loop
// dry ===> don't repeat yourself

let i = 0;

while (i <= 20) {
  console.log(i);
  i++;
}

console.log(`current value of i is ${i}`)

let j = 1;
let sum = 0;

while( j <= 100){
    sum = sum + j;
    j++
}

console.log(sum)


// for loop

for(let i = 0; i <= 10; i++){
    console.log(i)
}

let total = 0;

for (let i = 0; i <= 100 ; i++) {
    total = total + i;
}
console.log(total)

// do while loop

let k = 1;
do {
console.log(k)
k++
}while(k <= 10)