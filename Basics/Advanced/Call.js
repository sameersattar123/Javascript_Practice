function setUsername(username){
    this.username = username
    console.log("called")
}

function createUser(username , email , password){
    this.email = email;
    this.password = password;
    setUsername.call(this,username)
}

const user = new createUser("sameer" , "samee@gmail.com" , 2345);
console.log(user)

