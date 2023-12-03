// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is a best number")
    }
    console.log(element)
}

for (let i = 1; i <=10; i++) {
    console.log(`value of i is ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`value of i is ${i} and value of j is ${j}`)
        console.log(` ${i} * ${j} = ${i*j}`)
    }    
}

let myArray = ["sameer" , "sattar" , "shaikh"];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

// break and Continue statements

for (let i = 1; i <= 10; i++) {
    console.log(i)
    if (i == 5) {
        console.log("5 is a best number")
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is a best number")
        continue;
    }
    console.log(i)
}