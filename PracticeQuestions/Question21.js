// program to convert decimal to binary
function convertIntoBinary(x){
    let bin = 0
    let step = 1;
    let rem;
    let i = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );

        x = parseInt( x / 2)
        bin = bin + rem * i
        i = i*10
    }
    console.log(`Binary: ${bin}`);
}

const number = 9
convertIntoBinary(number)