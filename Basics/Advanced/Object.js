function multiplyByFive(num){
    return num*5;
}

multiplyByFive.power = 2;

// console.log(multiplyByFive(7));
// console.log(multiplyByFive.power);
// console.log(multiplyByFive.prototype);

function createUser(username , score){
    this.score = score;
    this.username = username
}

createUser.prototype.increatment = function(){
    return this.score = this.score + 1;
}
createUser.prototype.printMe = function(){  
    console.log(`price is ${this.score}`)
}

const chai = new createUser("sameer" , 56);
const tea =  createUser("kashif" , 56);

// console.log(chai.printMe()) // 56
// console.log(chai.increatment()) // 57

// tea.printMe(); // Cannot read properties of undefined (reading 'printMe')

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/





