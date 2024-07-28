// new keyowrd
// 1) this = {}
// 2) return 
//


// constructor function
function userCreator(firstName , lastName , userAge) {
    this.firstName = firstName
    this.lastName = lastName
    this.userAge = userAge
  }
  
  userCreator.prototype.sing = function(){
      return "I'm singing";
  }
  
  userCreator.prototype.age = function(){
      return `${this.userAge}`
  },
  
  userCreator.prototype.name = function(){
      return `${this.firstName} ${this.lastName}`
  }
  
  const user1 = new userCreator("Sameer" , "Sattar" , 20)
  const user3 = new userCreator("Sameer3" , "Sattar3" , 230)
  const user2 = new userCreator("Sameer2" , "Sattar2" , 220)
  
  console.log(user1)
  console.log(user2.sing())
  console.log(user3.age())