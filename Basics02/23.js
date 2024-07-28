// new keyowrd
// 1) this = {}
// 2) return 
//


// constructor function
function UserCreator(firstName , lastName , userAge) {
    this.firstName = firstName
    this.lastName = lastName
    this.userAge = userAge
  }
  
  UserCreator.prototype.sing = function(){
      return "I'm singing";
  }
  
  UserCreator.prototype.age = function(){
      return `${this.userAge}`
  },
  
  UserCreator.prototype.name = function(){
      return `${this.firstName} ${this.lastName}`
  }
  
  const user1 = new UserCreator("Sameer" , "Sattar" , 20)
  const user3 = new UserCreator("Sameer3" , "Sattar3" , 230)
  const user2 = new UserCreator("Sameer2" , "Sattar2" , 220)
  
  console.log(user1)
  console.log(user2.sing())
  console.log(user3.age())

 for (const key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key) // only print contructor keys
    }
 }