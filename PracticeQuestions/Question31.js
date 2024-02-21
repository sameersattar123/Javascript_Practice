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

console.log(person.hobbies[0])
console.log(person.hobbies[1])
console.log(person.hobbies[2])
console.log(person.greet())
console.log(person.score.phy)
console.log(person.score.chem)
console.log(person.score.math)
