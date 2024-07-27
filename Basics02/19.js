// create your own methods
// this key word

function personInfo() {
    console.log(`Hello, my name is ${this.name} and age is ${this.age}`);
}
const person1 = {
    name : 'sameer',
    age : 22,
    hobbies : ['playing' , 'sleeping'],
    sayHello : personInfo 
}
const person2 = {
    name : 'ali',
    age : 2222222,
    hobbies : ['playing' , 'sleeping'],
    sayHello : personInfo 
}
const person3 = {
    name : 'kashif',
    age : 2232,
    hobbies : ['playing' , 'sleeping'],
    sayHello : personInfo,
    about : function() {
        console.log(this) // whole person3 object
    }
}

person1.sayHello()
person2.sayHello()
person3.sayHello()
person3.about()