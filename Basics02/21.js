const userFunctions = {
    sing : function(){
        return "I'm singing";
    },
    age : function(){
        return `${this.userAge}`
    },
    name : function(){
        return `${this.firstName} ${this.lastName}`
    },
}

function userCreator(firstName , lastName , userAge) {
  const user = Object.create(userFunctions) // {}
  user.firstName = firstName
  user.lastName = lastName
  user.userAge = userAge
  return user  // return the new user object with the userFunctions added as its prototype.  This allows user1, user2, user3 to inherit the sing and age methods.  It also allows user1, user2, user3 to have their own unique firstName, lastName, and userAge properties.  The age method returns the userAge property.  The name method returns the firstName and lastName properties concatenated together.  This is how object-oriented programming (OOP) is
}

const user1 = userCreator("Sameer" , "Sattar" , 20)
const user3 = userCreator("Sameer3" , "Sattar3" , 230)
const user2 = userCreator("Sameer2" , "Sattar2" , 220)

console.log(user1)
console.log(user2.sing())
console.log(user3.age())