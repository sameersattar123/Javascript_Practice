// program to generate fibonacci series up to n terms

let number = 10
let n0 = 0
let n1 = 1;
let nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n0)
    nextTerm = n0 + n1
    n0 = n1;
    n1 = nextTerm
}