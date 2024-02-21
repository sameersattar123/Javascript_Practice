// program to create JavaScript object using object literal
const person = {
    name : "Sameer Sattar",
    age : 20,
    hobbies : ["reading" , "dancing" , "coding" , "gaming" , "teaching"],
    greet : function (){
        console.log("Helloe EveryOne")
    },
    score : {
        math : 23,
        phy : 22,
        chem : 22
    }
}

console.log(typeof person)

console.log(person)

delete person.score

delete person.greet

console.log(person)