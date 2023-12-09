const user = {
    name : "sameer sattar",
    email : "sameersattar@gmail.com",

    getUserDetails: function(){
        console.log(`Username : ${this.name}`)
        // console.log(this)
    }
}

// console.log(user.email)
// console.log(user.name);
// console.log(user.getUserDetails())

function User(username , isLoggedIn , loginCount){
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount

    this.greeting =  function(){
        console.log(`username : ${this.username}`)
    }
}

const userOne = new User("sameer" , true , 3)
const userTwo = new User("kashif" , false , 32)
console.log(userOne.greeting())
console.log(userOne)
console.log(userTwo)