// ES6

class User {
    constructor(username , email , password){
        this.email = email;
        this.password = password;
        this.username = username;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("sameer" , "sameer@gmail.com" , 345);
// console.log(chai.changeUsername());
// console.log(chai.encryptPassword());

// behind the scene 

function user(username , email ,password){
    this.email = email;
    this.password = password;
    this.username = username;
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea =  new user("sami" ,"sami@gmail.com" , 455);
// console.log(tea.changeUsername());
// console.log(tea.encryptPassword());